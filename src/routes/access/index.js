const express = require('express')
const router = express.Router()
const accessController = require('../../controller/access.controller')

//sign up
router.post('/shop/signup', accessController.signUp)

module.exports = router