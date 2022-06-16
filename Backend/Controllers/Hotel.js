const HotelSchema = require('../Modules/Hotel')
const Helper = require('../Helpers')


module.exports={
    ExistEmail: async (req,res)=>{
        const Email = await Helper.CheckExistEmail(req.body.Email)
        Email === 200 &&  res.status(200).send()
        Email === 404 &&  res.status(404).send()
    },
    Get: async (req, res) => {
        try{
            let  Hotels = await HotelSchema.find()
            return res.status(200).json(Hotels)
        }catch(err){
            return res.status(400).json(err)
        }
    },
    GetOne: async (req, res) => {
        try{
            const id = req.params.id
            const Hotel =await HotelSchema.find({_id:id}).populate('Comment')
            return res.status(200).json(Hotel)
        }catch(err){
            console.log(err)
        }
    },
    Add:async (req, res) => {
        const HashPassword = await Helper.HashPassword(req.body.Password)
        const Hotel = {
            Name:req.body.Name,
            City:req.body.City,
            Email:req.body.Email,
            Adress:req.body.Adress,
            Phone:req.body.Phone,
            Password:HashPassword,
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
            Comment:[],
            StartPrice:req.body.StartPrice
        }
        try{
            new HotelSchema(Hotel)
                .save()
                .then(async (DataHotel)=>{
                    const token = await Helper.CreateJwt(DataHotel._id,86400)
                    return res.status(201).send({DataHotel})
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
            const {_id} = req.body;
            const options = { upsert: true };
            const updateDoc = {
              $set: {
                Name:req.body.Name,
                City:req.body.City,
                Email:req.body.Email,
                Adress:req.body.Adress,
                Phone:req.body.Phone,
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
                Comment:[],
                StartPrice:req.body.StartPrice
              },
            };
            console.log("req.body",req.body)
                const result = await HotelSchema.findByIdAndUpdate(_id, updateDoc, options);
                console.log("result",result)
                return res.status(200).json(result)
            }catch(err){
                console.log(err)
            }
    },
    UpdateImg :async (req, res) =>{
        try{
            const {_id} = req.body;
            const options = { upsert: true };
            const updateDoc = {
              $set: {
                CoverImg:req.file.filename,
              },
            };
                const result = await HotelSchema.findByIdAndUpdate(_id, updateDoc, options);
                return res.status(200).json(result)
            }catch(err){
                console.log(err)
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



