const express = require('express')
const router = express.Router()
const Room = require('../Controllers/Room')

router.get('/',Room.Get)
router.get('/:id',Room.GetOne)
router.get('/Hotel/:id',Room.GetRoomsHotel)
router.post('/',Room.Add)
router.put('/:id',Room.Update)
router.delete('/:id',Room.Delete)

module.exports = router