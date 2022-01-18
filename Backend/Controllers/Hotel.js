const HotelSchema = require('../Modules/Hotel')
const Helper = require('../Helpers')
const Db = require('../Config')

module.exports={
    ExistEmail: async (req,res)=>{
        const Email = await Helper.CheckExistEmail(req.body.Email)
        Email === 200 &&  res.status(200).send()
        Email === 404 &&  res.status(404).send()
    },
    Get: async (req, res) => {
        try{
            const Hotels =await HotelSchema.find()
            return res.status(200).json(Hotels)
        }catch(err){
            return res.status(400).json(err)
        }
    },
    GetOne: async (req, res) => {
        try{
            const id = req.params.id
            const Hotel =await HotelSchema.find({_id:id})
            return res.status(200).json(Hotel)
        }catch(err){
            console.log(err)
        }
    },
    Add: async (req, res) => {
        const HashPassword = await Helper.HashPassword(req.body.Password)
        const Hotel = {
            Name:req.body.Name,
            City:req.body.City,
            Email:req.body.Email,
            Adress:req.body.Adress,
            Phone:req.body.Phone,
            Password:HashPassword,
            Reviews:0,
            CoverImg:'',
            Image:[],
            Website:req.body.Website,
            Description:req.body.Description,
            FacbookPage:req.body.FacbookPage,
            Instagram:req.body.Instagram,
            Localisation:req.body.Localisation,
            Hashtag:req.body.Hashtag,
            Service:req.body.Service,
            Vérified:false, 
        }
        try{
            new HotelSchema(Hotel)
                .save()
                .then(async (Hotel)=>{
                    const token = await Helper.CreateJwt(Hotel._id,86400)
                    return res.status(201).send({token})
                })
                .catch(err =>{
                    return res.status(400).send(err)
                })
        }catch(err){
                return res.status(400).send(err)
        }
    },
    Update: async (req, res) => {
        try{
            const id = req.params.id ;
            const updateDoc = {
              $set: {
                Name:req.body.Name,
              },
            };
            await HotelSchema.findByIdAndUpdate(id, updateDoc);
            return res.status(200).json("Succesfly updating")
        }catch(err){
            res.status(400).json(err)
        }
    },
    Delete: async (req, res) => {
        try{
            const id = req.params.id
            const Hotel =await HotelSchema.deleteOne({id:id})
            return res.status(200).json(Hotel)
        }catch(err){
            return res.status(400).json(err)
        }
    },
}



