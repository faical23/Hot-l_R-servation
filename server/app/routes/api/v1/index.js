const users=require('./users')
const auth=require('./auth')
const reservations=require('./reservations')
const hotels=require('./hotels')
const express=require('express')
const { checkifauth } = require('../../../middlewares')
const router=express.Router()

router.get("/",(req,res)=>{
    return res.json({
        message:"welcome in api version 1!"
    })
});

// router.use("/users",users);
router.use("/auth",auth);
router.use("/reservations",checkifauth,reservations);
router.use("/hotels",hotels);

module.exports=router