const express = require('express')
const router = express.Router()
const Auth = require('../Controllers/Auth')

router.post('/',Auth.Login)
router.delete('/:id',Auth.Logout)

module.exports = router