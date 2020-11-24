const express = require('express')
const controller = require('../controllers/order')
const router = express.Router()


router.post('/', controller.getAll)
router.post('/', controller.create)


module.exports = router