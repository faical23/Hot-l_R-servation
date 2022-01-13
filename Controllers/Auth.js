const HotelSchema = require('../Modules/Hotel')
const Helper = require('../Helpers')
const bcrypt = require('bcrypt');
const Db = require('../Config')

module.exports={
    Login: async (req, res) => {
        const Hotel = await HotelSchema.findOne({ Email: req.body.Email}).exec();
        Hotel === null  && res.status(403).send({Message:'Email Not Found'})
        bcrypt.compare(req.body.Password, Hotel.Password).then(async (validPass) => {
            !validPass &&  res.status(200).send({Message : 'Password Incorrect'})
            const token = await Helper.CreateJwt(Hotel._id,86400)
            return res.status(201).send({token})
        }).catch(err => res.status(400).send({Message : err}));
    },
    Logout: async (req, res) => {
        res.status(201).send({Message : "logout"})
    }
}