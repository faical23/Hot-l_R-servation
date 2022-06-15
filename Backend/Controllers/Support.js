const SupportSchema = require('../Modules/Support')


module.exports={
    ContactSupport:async (req, res) => {
        const Message = {
            Name:req.body.Name,
            Email:req.body.Email,
            Subject:req.body.Subject,
            Message:req.body.Message,
        }
        try{
            new SupportSchema(Message)
                .save()
                .then(async ()=>{
                    return res.status(201).send(Message)
                })
                .catch(err =>{
                    return res.status(400).send(err)
                })
        }catch(err){
                return res.status(400).send(err)
        }
    },
}