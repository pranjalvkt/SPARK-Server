const mongoose = require('mongoose');
const userModel = mongoose.model("Admins", {
    fname: String,
    phone: Number,
    email: String
})

module.exports=userModel;