const reviewsServices = require('../services/reviewsServices')

const getAllReviews = async (req, res) => {
  const id = req.id
  try {
    const allReviews = await reviewsServices.getAllReviews(id)
    res.status(200).send({ status: 'SUCESS', data: allReviews.rows })
  } catch (error) {
    res.status(400).send({ status: 'FAIL', message: error })
  }
}

const deleteReview = async (req, res) => {
  const { id } = req.params

  try {
    reviewsServices.deleteReview(id)
    res.status(200).send({ status: 'SUCESS', message: 'Review deleted' })
  } catch (error) {
    res.status(400).send({ status: 'FAIL', message: error })
  }
}

const postReview = async (req, res) => {
  const { stars, date, title, pages, author, summary } = req.body
  const id = req.id

  try {
    if (Object.keys(req.body).length < 1) {
      res.status(400).send({ status: 'FAIL', message: 'Insert items' })
    } else {
      reviewsServices.createReview(stars, date, title, pages, author, summary, id)
      res.status(200).send({ status: 'SUCESS', message: 'Review Created' })
    }
  } catch (error) {
    res.status(400).send({ status: 'FAIL', error: error })
  }
}

const updateReview = async (req, res) => {
  const book = req.body

  if (book.stars > 5) return res.status(400).json({ message: 'You can only pick up to 5 stars!' })

  try {
    reviewsServices.updateReview(book)
    res.status(200).send({ status: 'SUCESS', message: 'Review Updated' })
  } catch (error) {
    res.status(400).send({ status: 'FAIL', error: error })
  }
}

module.exports = {
  getAllReviews,
  deleteReview,
  postReview,
  updateReview
}
