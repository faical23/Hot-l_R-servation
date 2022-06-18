const RéservationeSchema = require('../Modules/Réservation')
const RoomSchema = require('../Modules/Room')
const ClienteSchema = require('../Modules/Client')


const CalculeTotal = async (Rooms,Durée) =>{
    let Total = 0
    for (const element of Rooms) {
        const GetRoom = await RoomSchema.find({_id:element})
        Total += (GetRoom[0].Price * Durée)
    }

    return Total
}
const CalculeDuréé = async (Start,End) =>{
    const date1 = new Date(Start);
    const date2 = new Date(End);
    const Difference_In_Time = date2.getTime() - date1.getTime();
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return Difference_In_Days
}

module.exports={
    GetOne: async (req, res) => {
        try{
            const id = req.params.id
            const Réservation =await RéservationeSchema.find({_id:id})
            return res.status(200).json(Réservation)
        }catch(err){
            console.log(err)
        }
    },
    GetHotelRéservation: async (req, res) => {
        try{
            const id = req.params.id
            const Réservation =await RéservationeSchema.find({Hotel:id})
            return res.status(200).json(Réservation)
        }catch(err){
            console.log(err)
        }

    },
    Add: async (req, res) => {
        const Rooms =await RoomSchema.find({Hotel:req.body.hotel,Type:req.body.RoomsType})
        let roomreserved = ''
        Rooms.map(room =>{
            let isAvaible = false
            if(!room.State && !isAvaible){
                isAvaible=true
                roomreserved = room
            }
        })
        if (roomreserved == '' ) return res.status(400).send();
        const date1 = new Date(req.body.DateStart);
        const date2 = new Date(req.body.DateEnd);
        const Difference_In_Time = date2.getTime() - date1.getTime();
        const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        const Total =   parseInt(roomreserved.Price*Difference_In_Days)

        const Réservation = {
            Hotel:req.body.hotel,
            Client:req.body.Name,
            DateStart:req.body.DateStart,
            DateEnd:req.body.DateEnd,
            Payed:false,
            Room:`${roomreserved.Type} Number ${roomreserved.Number} -  Block ${roomreserved.Block}`,
            Durée:Difference_In_Days,
            Total:Total,
        }
        try{
            new RéservationeSchema(Réservation)
            .save()
            .then(async(Réservation)=>{
                const id = roomreserved._id ;
                const updateDoc = {
                  $set: {
                    State:true,
                  },
                };
                const Room = await RoomSchema.findByIdAndUpdate(id, updateDoc);
                return res.status(201).send({Réservation})
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
                Payed:true,
              },
            };
            const Réservation = await RéservationeSchema.findByIdAndUpdate(id, updateDoc);
            return res.status(200).json({Message:"Update successfuly"})
        }catch(err){
            res.status(400).json(err)
        }
    },
    Delete: async (req, res) => {
        try{
            const id = req.params.id
            const Réservation =await RéservationeSchema.deleteOne({_id:id})
            return res.status(200).json({Message:"Delete successfuly"})
        }catch(err){
            return res.status(400).json(err)
        }
    },
    Profit: async (req, res) => {
        try{
            const id = req.params.id
            console.log("id",id)
            const today = new Date()
            var d = new Date();
            d.setMonth(d.getMonth() - 1);
            const Monthly =await RéservationeSchema.find({createdAt:{$gte:d,$lte:today},Hotel:id}); 
            const Daily =await RéservationeSchema.find({createdAt:{$gte:today},Hotel:id}); 
            const All =await RéservationeSchema.find({Hotel:id}); 
            console.log({gte:d,lte:today})
            const data = {
                month:Monthly,
                Day:Daily,
                total:All
            }
            // console.log("data",data)
            return res.status(200).json(data)
        }catch(err){
            console.log(err)
        }
    },
    
}



