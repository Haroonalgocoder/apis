

const mongoose = require("mongoose");


const userschema = new mongoose.Schema({
    UserName:{type:String  ,required: true , uppercase: true , minlength: 6 },
    DateofBirth:{type:Date },
    Address:{type:String , },
    Email:{type:String , unique :true},
    contact:{type:Number , unique:true},
    Password:{type:String }, 
    token:{type:String},
})



module.exports = mongoose.model("user" , userschema );