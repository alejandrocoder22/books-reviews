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

module.exports = {
  getAllReviews,
  deleteReview,
  postReview
}
