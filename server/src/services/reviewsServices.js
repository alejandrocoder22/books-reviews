const pool = require('../database')

const getAllReviews = (id) => pool.query(`SELECT * FROM reviews WHERE user_id = ${id}`)

const deleteReview = (id) => pool.query('DELETE FROM reviews WHERE review_id=$1', [id])

const createReview = (stars, date, title, pages, author, summary, id) => {
  pool.query('INSERT INTO reviews (stars, date, title, pages, author, summary, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7)',
    [
      stars,
      date,
      title,
      pages,
      author,
      summary,
      id
    ])
}
module.exports = {
  getAllReviews,
  deleteReview,
  createReview
}
