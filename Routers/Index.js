const express = require("express");
const router = express.Router()

const HotelRouter = require('./Hotel');
const AuthRouter = require('./Auth');

router.use("/Hotel", HotelRouter);
router.use("/Auth", AuthRouter);

module.exports = router


