const HotelSchema = require('../Modules/Hotel')
const Helper = require('../Helpers')
const bcrypt = require('bcrypt');

module.exports={
    CheckEmail:async (req, res) => {
        const {email} = req.body
        try{
            const hotel = await HotelSchema.findOne({ Email: email}, {})
            console.log("hotel",hotel)
            if(hotel) res.status(200).json();
            else  res.status(404).json()
        }
        catch(err){
            return res.status(400).json()
        }
    },
    Inscription: async (req, res) => {
        const {email,name,password,city,phone} = req.body

        const HashPassword = await Helper.HashPassword(password)
        const Hotel = {
            Name:name,
            City:city,
            Email:email,
            Adress:"",
            Phone:phone,
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
        try{
            new HotelSchema(Hotel)
                .save()
                .then(async (DataHotel)=>{
                    const token = await Helper.CreateJwt(DataHotel._id,86400)
                    return res.status(201).json({Hotel:Hotel,token:token})
                })
                .catch(err =>{
                    console.log(err)
                    return res.status(400).send(err)
                })
        }catch(err){
                return res.status(400).send(err)
        }
    },
    Login: async (req, res) => {
        console.log("req",req.body)
        const Hotel = await HotelSchema.findOne({ Email: req.body.email}).exec();
        // Hotel === null  && res.status(403).send({Message:'Email Not Found'})
        const token = await Helper.CreateJwt(Hotel._id,86400)
        return res.status(200).json({Hotel:Hotel,token:token})
        // bcrypt.compare(req.body.password, Hotel.Password).then(async (validPass) => {
        //     !validPass &&  res.status(403).send({Message : 'Password Incorrect'})
        //     const token = await Helper.CreateJwt(Hotel._id,86400)
        //     return res.status(200).json({Hotel:Hotel,token:token})
        // }).catch(err => res.status(400).send({Message : err}));
    },
    Logout: async (req, res) => {
        res.status(201).send({Message : "logout"})
    }
}