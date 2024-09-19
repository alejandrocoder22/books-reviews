const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authServices = require('../services/authServices')

const loginUser = async (req, res) => {
  const { username, password } = req.body

  const user = await authServices.userExist(username)

  if (user.rows.length < 1) {
    return res.status(403).send({ status: 'FAILED', message: 'Invalid username or password' })
  }

  const checkedUSer = user.rows[0]
  bcrypt.compare(password, checkedUSer.password, (err, result) => {
    if (result) {
      if (err) {
        return res.status(403).send({ status: 'FAILED', message: 'Invalid username or password' })
      }
      const payload = {
        id: checkedUSer.user_id,
        username
      }
      const accessToken = generateAccesToken(payload)
      res.send({
        auth: true,
        accessToken,
        username
      })
    } else {
      res.status(403).send({ status: 'FAIL', message: 'Invalid Username Or Password' })
    }
  })
}

const createUser = async (req, res) => {
  const { username, password } = req.body

  const userCreated = await authServices.userExist(username)

  if (userCreated.rows.length > 0) {
    return res.status(400).send({ status: 'FAIL', message: 'User already exist' })
  } else {
    const payload = {
      userId: '',
      username
    }
    const SALT_ROUNDS = 10
    bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
      if (err) {
        res.status(400).send({ status: 'FAIL', message: err })
      }

      bcrypt.hash(password, salt, async (err, hashedPassword) => {
        if (err) {
          res.status(400).send({ status: 'FAIL', message: err })
        }

        const userCreated = await authServices.createUser(username, hashedPassword)

        payload.userId = userCreated.rows[0].user_id

        const token = generateAccesToken(payload)
        res.status(201).send({ status: 'SUCESS', message: 'User ureated', token })
      })
    })
  }
}

const generateAccesToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_KEY, {
    expiresIn: '2d'
  })
}

const renewToken = (req, res) => {
  const id = req.id
  const username = req.username
  const newToken = jwt.sign({ username, id }, process.env.JWT_KEY, { expiresIn: '2d' })

  id
    ? res.json({
        ok: true,
        msg: 'renew',
        id,
        username,
        newToken
      })
    : res.json({
      ok: false,
      msg: 'Token is invalid'
    })
}

module.exports = {
  createUser,
  loginUser,
  renewToken

}
