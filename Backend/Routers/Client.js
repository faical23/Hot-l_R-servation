const express = require('express')
const router = express.Router()
const Client = require('../Controllers/Client')


router.get('/',Client.Get)
router.get('/:id',Client.GetOne)
router.get('/Hotel/:id',Client.GetClientHotel)
router.post('/',Client.Add)
module.exports = router