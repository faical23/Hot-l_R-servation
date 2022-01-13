const express = require('express')
const router = express.Router()
const Auth = require('../Controllers/Auth')
const MiddleWare = require("../Midlewares")


router.post('/',Auth.Login)
router.delete('/',MiddleWare.verifyToken,Auth.Logout)

module.exports = router