const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");

const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

const routes =require("./routes/app")(app);

// let MONGODB_URI = 'mongodb+srv://admin:admin@cluster0.ezepv.mongodb.net/testDB'
let MONGODB_URI='mongodb+srv://admin:admin@cluster0.ny69e.mongodb.net/task01'

mongoose.connect(
    MONGODB_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(res =>{
    console.log('DB Connected')
}).catch(err =>{
    console.log('Some then went wrong')
})

// 

app.listen(2022, () => console.log("Server is running"));