const express = require('express');
const router = express.Router();
const folderModel = require('../models/folderModel');

router.get('/getfolders', (req, res)=>{
    
    folderModel.find().then((data)=>{
        res.send(data);
    })
})
module.exports = router;