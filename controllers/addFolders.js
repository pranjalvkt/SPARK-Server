const express = require('express');
const router = express.Router();
const folderModel = require('../models/folderModel');

router.get('/createfolder', (req, res)=>{
    const data = req.body;
    const folder = new folderModel({
        user: "raghav",
        folders: [
            {
                name: "All Photos",
                url: "1bJMGZDQY16ldD6ZXkB3DxmNiNJoi6Xfk",
            },
            {
                name: "First Birthday",
                url: "19QR7hGYMmmAFIaVboegAvwagc7jBQFTk"
            }
        ]
    })
    folder.save().then((result)=>{
        res.send({msg: "Folder created successfully!"});
    }).catch((err)=>{
        res.send({msg: 'Some error occured!'});
    })
})
module.exports = router;