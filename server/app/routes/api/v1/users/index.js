const users=require('../../../../controllers/apis/users')
const express=require('express')
const router=express.Router()

router.get("/",users.getAll);

module.exports=router