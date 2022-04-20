const mongoose = require('mongoose');
const Connect = async () =>{
    try{
        const uri = 'mongodb+srv://faical:faical123@cluster0.mfnru.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
        const testConnect = await mongoose.connect(uri,{useNewUrlParser: true});
        testConnect ? console.log("sucess") : console.log("refuse")
        
    }catch(err){
        console.log("error to connect with DB " , err)
    }
}
Connect();
