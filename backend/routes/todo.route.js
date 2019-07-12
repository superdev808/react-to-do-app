const express = require('express')
const router = express.Router()

const post_controller = require('../controller/post.controller')

// a simple test url to check that all of our files are communicating correctly.
router.post('/append', post_controller.append)

module.exports = router