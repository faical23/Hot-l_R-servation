const mongoose = require('mongoose');
const Connect = async () =>{
    try{
        const uri ='mongodb+srv://faical:faical321@realmcluster.pcodf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
        await mongoose.connect(uri,
            {
                useNewUrlParser: true,
            });
        console.log('connected to mongodb  Reservation hotel')
    }catch(err){
        console.log(err)
    }
}
Connect();
