const express = require('express')
const router = express.Router()
const Invoice = require('../Controllers/Invoice')

router.get('/:id',Invoice.GetOne)
router.get('/Hotel/:Id',Invoice.GetHotelInvoice)
router.get('/Client/:Id',Invoice.GetClientInvoice)
router.post('/',Invoice.Add)

module.exports = router