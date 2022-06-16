const express = require('express')
const router = express.Router()
const Hotel = require('../Controllers/Hotel')
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
const upload = multer({ storage: storage }).single('CoverImg')

router.get('/',Hotel.Get)
router.get('/:id',Hotel.GetOne)
router.post('/',Hotel.Add)
router.post('/CheckEmail',Hotel.ExistEmail)
router.put('/:id',Hotel.Update)
router.put('/img/:id',upload,Hotel.UpdateImg)
router.delete('/:id',Hotel.Delete)


module.exports = router