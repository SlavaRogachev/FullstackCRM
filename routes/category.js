const express = require('express')
const controller = require('../controllers/category')
const passport = require('passport')
const router = express.Router()


router.post('/', passport.authenticate('jwt', {session: false}), controller.getAll)
router.post('/:id', controller.getById)
router.post('/:id', controller.remove)
router.post('/', controller.create)
router.post('/:id', controller.update)


module.exports = router