const {reserver, my, cancel}=require('../../../../controllers/apis/reservations')
const express=require('express')
const router=express.Router()

router.post("/",reserver);
router.get("/",my);
router.post("/",cancel);

module.exports=router