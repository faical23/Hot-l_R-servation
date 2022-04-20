const HotelSchema = require('../Modules/Hotel')
const Helper = require('../Helpers')
const bcrypt = require('bcrypt');

module.exports={
    Inscription: async (req, res) => {
        const {Email,Name,Password,City,Phone} = req.body
        const HashPassword = await Helper.HashPassword(Password)
        const Hotel = {
            Name:Name,
            City:City,
            Email:Email,
            Adress:"",
            Phone:Phone,
            Password:HashPassword,
            CoverImg:'',
            Image:[],
            Website:"",
            Description:"",
            FacbookPage:"",
            Instagram:"",
            Localisation:"",
            Hashtag:"",
            Service:"",
            Vérified:false, 
            Comment:[],
            StartPrice:""
        }
        console.log("im her ")
        try{
            new HotelSchema(Hotel)
                .save()
                .then(async (DataHotel)=>{
                    const token = await Helper.CreateJwt(DataHotel._id,86400)
                    console.log(token)
                    return res.status(201).send("success")
                })
                .catch(err =>{
                    return res.status(400).send(err)
                })
        }catch(err){
                return res.status(400).send(err)
        }
    },
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