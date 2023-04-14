const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

router.post('/create', (req, res)=>{
    const data = req.body;
    console.log(data);
    // const user = new userModel({
    //     fname: "Pranjal",
    //     phone: "93856578",
    //     email: "email.com"
    // })
    // user.save().then((result)=>{
    //     res.send({msg: "User created successfully!"});
    // }).catch((err)=>{
    //     res.send({msg: 'Some error occured!'});
    // })
})
module.exports = router;