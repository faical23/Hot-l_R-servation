const RéservationeSchema = require('../Modules/Réservation')
const RoomSchema = require('../Modules/Room')

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
        const date1 = new Date(req.body.DateStart);
        const date2 = new Date(req.body.DateEnd);
        const Difference_In_Time = date2.getTime() - date1.getTime();
        const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        const Total = await CalculeTotal(req.body.Room,Difference_In_Days)

        console.log("From Api" , Total)
        const Réservation = {
            Hotel:req.body.Hotel,
            Client:req.body.Client,
            DateStart:req.body.DateStart,
            DateEnd:req.body.DateEnd,
            Payed:req.body.Payed,
            Room:req.body.Room,
            Durée:Difference_In_Days,
            Total:Total,
        }
        try{
            new RéservationeSchema(Réservation)
            .save()
            .then((Réservation)=>{
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
        const Durée = await CalculeDuréé(req.body.DateStart,req.body.DateEnd)
        const Total = await CalculeTotal(req.body.Room,Durée)
        try{
            const id = req.params.id ;
            const updateDoc = {
              $set: {
                Hotel:req.body.Hotel,
                Client:req.body.Client,
                DateStart:req.body.DateStart,
                DateEnd:req.body.DateEnd,
                Payed:req.body.Payed,
                Room:req.body.Room,
                Durée:Durée,
                Total:Total,
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
            const Réservation =await RéservationeSchema.deleteOne({id:id})
            return res.status(200).json({Message:"Delete successfuly"})
        }catch(err){
            return res.status(400).json(err)
        }
    }
}



