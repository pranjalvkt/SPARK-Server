const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

router.get('/getusers', (req, res)=>{
    userModel.find().then((data)=>{
        res.send(data);
    })
})
module.exports = router;