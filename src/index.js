const express = require("express");

const {ServerConfig , Logger} = require("./config");
const apiRoutes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));;;;;
app.use('/api' , apiRoutes);;;;;;


app.listen(ServerConfig.PORT, () => {
    console.log(`Server is running on port ${ServerConfig.PORT}`);
    // bad code alert
    const  { City , Airport } = require("./models");
    // const city = await City.findByPk(1);
    // console.log(city);
    // const airport = await Airport.create({name:"John F. Kennedy International Airport", code: "JFK", address: "Queens, NY 11430, USA", city: "New York", cityId: 1});
    // const city =  

});


