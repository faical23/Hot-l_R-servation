const mongoose = require('mongoose');
const Connect = async () => {
    mongoose.connect('mongodb://localhost:27017/Hotelreservations', () => {
        console.log('Database Connected')
    })
    mongoose.connection.on('error', (err) => {
        console.log('Error in DB connection: ' + err);
        process.exit(1);
    });
}
 
Connect();
