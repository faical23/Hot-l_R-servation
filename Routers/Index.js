const express = require("express");
const router = express.Router()

const HotelRouter = require('./Hotel');
const AuthRouter = require('./Auth');
const RoomTypeRouter = require('./TypeRoome');
const RoomRouter = require('./Room');
const CommentRouter = require('./Comment');


router.use("/Hotel", HotelRouter);
router.use("/Auth", AuthRouter);
router.use("/RoomType", RoomTypeRouter);
router.use("/Room", RoomRouter);
router.use("/Comment", CommentRouter);

module.exports = router


