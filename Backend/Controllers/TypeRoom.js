const RoomTypeSchema = require('../Modules/RoomeType')

module.exports={
    Get: async (req, res) => {
        try{
            const Types =await RoomTypeSchema.find()
            return res.status(200).json(Types)
        }catch(err){
            return res.status(400).json(err)
        }
    },
    Add: async (req, res) => {
        const TypeRoom = {
            Name:req.body.Name,
        }
        try{
            new RoomTypeSchema(TypeRoom)
            .save()
            .then(async (Type)=>{
                return res.status(201).send({Type})
            })
            .catch(err =>{
                return res.status(400).send(err)
            })
        }catch(err){
                return res.status(400).send(err)
        }
    },
}



