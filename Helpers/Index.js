const validator = require('validator');
const HotelSchema = require('../Modules/Hotel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

module.exports={
    CheckExistEmail : async (Email) =>{
        return HotelSchema.findOne({ Email: Email}, {})
        .then(result => {
            if(result) return  200;
            else  return  404
        })
        .catch(err => {return err});
    },
    CreateJwt : async(id,Expiration) =>{
        const token = await jwt.sign(
            { id: id},
            "FAICALBAHSIS",
            {
              expiresIn: Expiration,
            }
          );
          return token;
    },
    HashPassword : async(Password) =>{
          const salt = await bcrypt.genSalt(10);
          return await bcrypt.hash(Password, salt);
    },
    ComparePassword:  (Password,UserPass) =>{
        bcrypt.compare(Password, UserPass).then( (validPass) => {
            Promise.resolve(validPass).then(function(validPass) {
                console.log(validPass);
                return validPass
              }, function(validPass) {
                return validPass
              });
        }).catch(err => console.log('error: ' + err));
    },
}