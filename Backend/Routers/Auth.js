const express = require('express')
const router = express.Router()
const Auth = require('../Controllers/Auth')
const MiddleWare = require("../Midlewares")


router.post('/CheckEmail',Auth.CheckEmail)
router.post('/Insciption',Auth.Inscription)
router.post('/Login',Auth.Login)
router.delete('/',MiddleWare.verifyToken,Auth.Logout)

module.exports = router