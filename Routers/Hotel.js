const express = require('express')
const router = express.Router()
const Hotel = require('../Controllers/Hotel')

router.get('/',Hotel.Get)
router.get('/:id',Hotel.GetOne)
router.post('/',Hotel.Add)
router.post('/CheckEmail',Hotel.ExistEmail)
router.put('/:id',Hotel.Update)
router.delete('/:id',Hotel.Delete)

module.exports = router