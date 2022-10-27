const express = require('express')
const router = express.Router()

const { createUser, loginUser, renewToken } = require('../controllers/auth')
const verifyToken = require('../middlewares/verifyToken')

router.post('/register', createUser)
router.post('/login', loginUser)
router.get('/renew', verifyToken, renewToken)

module.exports = router
