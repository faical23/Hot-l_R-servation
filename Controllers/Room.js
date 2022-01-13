const RoomSchema = require('../Modules/Room')

module.exports={

    Get: async (req, res) => {
        try{
            const Rooms =await RoomSchema.find()
            return res.status(200).json(Rooms)
        }catch(err){
            return res.status(400).json(err)
        }
    },
    GetOne: async (req, res) => {
        try{
            const id = req.params.id
            const Room =await RoomSchema.find({_id:id})
            return res.status(200).json(Room)
        }catch(err){
            console.log(err)
        }
    },
    GetRoomsHotel: async (req, res) => {
        try{
            const id = req.params.id
            const Room =await RoomSchema.find({Hotel:id})
            return res.status(200).json(Room)
        }catch(err){
            console.log(err)
        }
    },
    Add: async (req, res) => {
        const Room = {
            "Number":req.body.Number,
            "State":false,
            "Block":req.body.Block,
            "Price":req.body.Price,
            "Déscription":req.body.Déscription,
            "Type":req.body.Type,
            "Hotel":req.body.Hotel,
            "Image":req.body.Image,
            "Bed":req.body.Bed,
        }
        try{
            new RoomSchema(Room)
                .save()
                .then((Room)=>{
                    return res.status(201).send({Room})
                })
                .catch(err =>{
                    console.error(err)
                    return res.status(400).send(err)
                })
        }catch(err){
                console.error(err)
                return res.status(400).send(err)
        }
    },
    Update: async (req, res) => {

        try{
            const id = req.params.id ;
            const updateDoc = {
              $set: {
                Number:req.body.Number,
                State:false,
                Block:req.body.Block,
                Price:req.body.Price,
                Déscription:req.body.Déscription,
                Type:req.body.Type,
                Hotel:req.body.Hotel,
                Image:req.body.Image,
                Bed:req.body.Bed,
              },
            };
            const Room = await RoomSchema.findByIdAndUpdate(id, updateDoc);
            return res.status(200).json({Message:"Update successfuly"})
        }catch(err){
            res.status(400).json(err)
        }
    },
    Delete: async (req, res) => {
        try{
            const id = req.params.id
            const Room =await RoomSchema.deleteOne({id:id})
            return res.status(200).json({Message:"Delete successfuly"})
        }catch(err){
            return res.status(400).json(err)
        }
    },
}



