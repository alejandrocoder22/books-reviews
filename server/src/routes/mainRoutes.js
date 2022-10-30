const express = require('express')

const router = express.Router()
const verifyToken = require('../middlewares/verifyToken')
const { getAllReviews, deleteReview, postReview, updateReview } = require('../controllers/reviews')

router.get('/', verifyToken, getAllReviews)
router.delete('/:id', deleteReview)
router.post('/', verifyToken, postReview)
router.put('/', verifyToken, updateReview)

module.exports = router
