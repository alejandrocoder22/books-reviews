const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  const token = req.header('x-token')

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'No hay token en la petición'
    })
  }

  try {
    const verifyToken = jwt.verify(token, process.env.JWT_KEY)
    req.id = verifyToken.id
    req.username = verifyToken.username
    next()
  } catch (error) {
    res.status(401).json({
      ok: false,
      message: 'Invalid token'
    })
  }
}

module.exports = verifyToken
