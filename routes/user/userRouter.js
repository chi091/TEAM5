const express = require('express')
const router = express.Router()
const userController = require('./userController.js')
const { upload } = require('../../utils/uploads_user.js')

router.post('/join',upload.single('img'),userController.join)
router.post('/profileimg',userController.profileimg)
router.post('/idcheck',userController.idcheck)
router.post('/login',userController.login)
router.post('welcome',userController.welcome)





module.exports = router