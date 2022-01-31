const express = require("express");
const cors = require("cors");
const app = express();
const logger=require("morgan");
const { connectDB } = require("./app/config/db");

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

app.use("/",express.static("../client/build"))
app.use("/storage",express.static("./storage"))
// parse requests of content-type - application/json
app.use(express.json());
app.use(logger("dev"));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// api's routes
app.use("/api",require('./app/routes/api/index'));

// set port, listen for requests
const PORT = process.env.PORT || 8080;



connectDB().then(res=>{
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
}).catch(err=>{
  console.log("struggling when we trying connect to database");
})
