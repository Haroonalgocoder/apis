
const mongoose = require("mongoose");

const Imageschema = new mongoose.Schema({
    PDimage:{type:String},
    PDname:{type:String}
})

// module.exports = upload;
module.exports = mongoose.model("url" , Imageschema)