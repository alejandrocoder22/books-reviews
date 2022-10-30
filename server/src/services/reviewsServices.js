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
const updateReview = (book) => pool.query('UPDATE reviews SET stars = $1, date = $2, title = $3, pages = $4, author = $5, summary = $6 WHERE review_id = $7',
  [
    book.stars,
    book.date,
    book.title,
    book.pages,
    book.author,
    book.summary,
    book.review_id
  ])
module.exports = {
  getAllReviews,
  deleteReview,
  createReview,
  updateReview
}
