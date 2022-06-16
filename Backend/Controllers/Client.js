const ClienteSchema = require('../Modules/Client')


module.exports={
    Get: async (req, res) => {
        try{
            // console.log("its work")
            const Client =await ClienteSchema.find()
            return res.status(200).json(Client)
        }catch(err){
            return res.status(400).json(err)
        }
    },
    GetOne: async (req, res) => {
        try{
            const id = req.params.id
            const Client =await ClienteSchema.find({_id:id})
            return res.status(200).json(Client)
        }catch(err){
            return res.status(400).json(err)
        }
    },
    GetClientHotel: async (req, res) => {
        try{
            const id = req.params.id
            const Client =await ClienteSchema.find({Hotel:id})
            return res.status(200).json(Client)
        }catch(err){
            return res.status(400).json(err)
        }
    },
    Add: async (req, res) => {
        const TypeRoom = {
            Name:req.body.Name,
            Email:req.body.Email,
            Phone:req.body.Phone,
            Hotel:req.body.Hotel,
        }
        try{
            new ClienteSchema(TypeRoom)
            .save()
            .then(async (Client)=>{
                return res.status(201).send({Client})
            })
            .catch(err =>{
                return res.status(400).send(err)
            })
        }catch(err){
                return res.status(400).send(err)
        }
    },
}



