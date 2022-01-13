const express = require('express')
const router = express.Router()
const Comment = require('../Controllers/Comment')


router.get('/:id',Comment.GetCommentHotel)
router.post('/',Comment.Add)
module.exports = router