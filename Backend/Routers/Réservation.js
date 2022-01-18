const express = require('express')
const router = express.Router()
const Réservation = require('../Controllers/Réservation')
const MiddleWare = require("../Midlewares")


router.get('/:id',Réservation.GetOne)
router.get('/Hotel/:id',Réservation.GetHotelRéservation)
router.put('/:id',Réservation.Update)
router.post('/',Réservation.Add)
router.delete('/:id',Réservation.Delete)

module.exports = router