const express = require('express')
const router = express.Router()
const Support = require('../Controllers/Support')

router.post('/',Support.ContactSupport)

module.exports = router