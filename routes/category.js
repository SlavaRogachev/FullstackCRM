const express = require('express')
const controller = require('../controllers/category')
const router = express.Router()


router.post('/', controller.getAll)
router.post('/:id', controller.getById)
router.post('/:id', controller.remove)
router.post('/', controller.create)
router.post('/:id', controller.update)


module.exports = router