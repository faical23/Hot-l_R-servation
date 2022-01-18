const express = require('express')
const router = express.Router()
const TypeRoome = require('../Controllers/TypeRoom')
const MiddleWare = require("../Midlewares")


router.get('/',TypeRoome.Get)
router.post('/',MiddleWare.verifyToken,TypeRoome.Add)
module.exports = router