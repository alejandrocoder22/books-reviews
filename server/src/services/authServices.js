const pool = require('../database')

const userExist = (username) => pool.query('SELECT * FROM users WHERE username=$1', [username])

const createUser = (username, hashedPassword) => pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hashedPassword])

module.exports = {
  userExist,
  createUser
}
