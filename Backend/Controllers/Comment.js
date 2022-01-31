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
            Rate:req.body.Rate
        }
        try{
            new CommenteSchema(Comment)
            .save()
            .then(async (CommentHotel)=>{
                const GetHotel = await HotelSchema.findById(req.body.Hotel)
                    await HotelSchema.findByIdAndUpdate(
                    req.body.Hotel,
                    { Comment: [...GetHotel.Comment,CommentHotel._id]}
                ).then(Hotel =>{
                    return res.status(200).send(Hotel)
                })
            })
            .catch(err =>{
                return res.status(400).send(err)
            })
        }catch(err){
                return res.status(400).send(err)
        }
    },
}