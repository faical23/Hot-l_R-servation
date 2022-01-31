// here we add all the models we have in our app
const User = require('./users');
const Room = require('./rooms');
const RoomType = require('./roomtypes');
const Hotel = require('./hotels');
const Reservation = require('./reservations');


module.exports = {
  User,
  Room,
  RoomType,
  Hotel,
  Reservation
}