const CommenteSchema  = require('../Modules/Comment')
const HotelSchema = require('../Modules/Hotel')

module.exports={
    GetCommentHotel: async (req, res) => {
        try{
            const id = req.params.id
            const Comment =await CommenteSchema.find({Hotel:id})
            return res.status(200).json(Comment)
        }catch(err){
            return res.status(400).json(err)
        }
    },
    Add: async (req, res) => {
        const Comment = {
            Comment:req.body.Comment,
            Hotel:req.body.Hotel,
            Rate:req.body.Rate
        }
        try{
            new CommenteSchema(Comment)
            .save()
            .then(async (CommentHotel)=>{
                HotelSchema.Comment.push(CommentHotel).save()
                // HotelSchema.save();
                return res.status(201).send("success")
                
            })
            .catch(err =>{
                return res.status(400).send(err)
            })
        }catch(err){
                return res.status(400).send(err)
        }
    },
}