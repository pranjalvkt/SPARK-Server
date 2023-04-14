const express=require('express')
const app=express()
const bp=require('body-parser')
var cors = require('cors')
app.use(bp.json())
app.use(cors())
//Controllers
const createUser = require('./controllers/createUser');
const getFolders = require('./controllers/getFolders');
const addFolder = require('./controllers/addFolders');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sparkbackupapp:H7c1PdClK3PEHW3d@cluster0.lv0ijoq.mongodb.net/?retryWrites=true&w=majority').then((res)=>{
    console.log("DB Connected");
}).catch((err) => {
    console.log(res);
});

app.use('/', createUser);
app.use('/', getFolders);
app.use('/', addFolder);
app.listen(3001, ()=>{
    console.log("Server started at port 3001");
})