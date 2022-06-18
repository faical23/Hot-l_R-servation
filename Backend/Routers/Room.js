const express = require('express')
const router = express.Router()
const Room = require('../Controllers/Room')
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,uniqueSuffix+"-"+ file.originalname)
    }
})  
const upload = multer({ storage: storage }).single('Image')

router.get('/',Room.Get)
router.get('/:id',Room.GetOne)
router.get('/Hotel/:id',Room.GetRoomsHotel)
router.post('/',upload,Room.Add)
router.put('/:id',upload,Room.Update)
router.delete('/:id',Room.Delete)
router.get('/Hotel/Disponible/:id',Room.DisponbleRoom)
router.get('/Type/:id',Room.GetRoomByType)
router.get('/:hotel/:type',Room.GetRoomByTypeBYHotel)
router.put('/updatestate/:id/',Room.UpdateState)


module.exports = router