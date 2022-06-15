const express = require("express");
const router = express.Router()

const HotelRouter = require('./Hotel');
const AuthRouter = require('./Auth');
const RoomTypeRouter = require('./TypeRoome');
const RoomRouter = require('./Room');
const CommentRouter = require('./Comment');
const ClientRouter = require('./Client');
const RéservationRouter = require('./Réservation');
const InvoiceRouter = require('./Invoice');
const SupportRouter = require('./Support');


router.use("/Hotel", HotelRouter);
router.use("/Auth", AuthRouter);
router.use("/RoomType", RoomTypeRouter);
router.use("/Room", RoomRouter);
router.use("/Comment", CommentRouter);
router.use("/Client", ClientRouter);
router.use("/Reservation", RéservationRouter);
router.use("/Invoice", InvoiceRouter);
router.use("/Support", SupportRouter);


module.exports = router


