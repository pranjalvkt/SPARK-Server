const mongoose = require('mongoose');
const userModel = mongoose.model("Users", {
    fname: String,
    phone: Number,
    email: String
})

module.exports=userModel;