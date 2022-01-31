const {my}=require('../../../../controllers/apis/hotels')
const express=require('express')
const router=express.Router()

router.get("/",my);


module.exports=router