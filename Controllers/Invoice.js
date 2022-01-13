const InvoiceSchema = require('../Modules/Invoice')

module.exports={
    GetOne: async (req, res) => {
        try{
            const Id = req.params.id
            const Inoice =await InvoiceSchema.find({_id:Id})
            return res.status(200).json(Inoice)
        }catch(err){
            return res.status(400).json(err)
        }
    },
    GetHotelInvoice: async (req, res) => {
        try{
            const Id = req.params.Id
            const Inoices =await InvoiceSchema.find({Hotel:Id})
            return res.status(200).json(Inoices)
        }catch(err){
            return res.status(400).json(err)
        }
    },
    GetClientInvoice: async (req, res) => {
        try{
            const Id = req.params.Id
            const Inoices =await InvoiceSchema.find({Client :Id})
            return res.status(200).json(Inoices)
        }catch(err){
            return res.status(400).json(err)
        }
    },
    Add: async (req, res) => {
        const TypeRoom = {
            Hotel:req.body.Hotel,
            Client:req.body.Client,
            Réservation:req.body.Réservation,
            DateFacture:req.body.Date,
            PaimentMéthode:req.body.PaimentMéthode,
        }
        try{
            new InvoiceSchema(TypeRoom)
            .save()
            .then(async (Invoice)=>{
                return res.status(201).send({Invoice})
            })
            .catch(err =>{
                return res.status(400).send(err)
            })
        }catch(err){
                return res.status(400).send(err)
        }
    },
}



