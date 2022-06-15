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
            Name:req.body.Name,
            Hotel:req.body._id
        }
        console.log("Comment",Comment)
        try{
            new CommenteSchema(Comment)
            .save()
            .then(async (CommentHotel)=>{
                console.log(CommentHotel)
                return res.status(200).send()

            })
            .catch(err =>{
                return res.status(400).send(err)
            })
        }catch(err){
                return res.status(400).send(err)
        }
    },
}