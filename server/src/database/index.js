const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: 'books_reviews',
  por: 5432
})

module.exports = pool
