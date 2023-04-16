const express=require('express')
const app=express()
const bp=require('body-parser')
var cors = require('cors')
app.use(bp.json())
app.use(cors())

//Controllers
const createUser = require('./controllers/createUser');
const getFolders = require('./controllers/getFolders');
const createFolder = require('./controllers/createFolder');
const getUsers = require('./controllers/getUsers');

const port = process.env.PORT || 3001;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sparkbackupapp:H7c1PdClK3PEHW3d@cluster0.lv0ijoq.mongodb.net/?retryWrites=true&w=majority').then((res)=>{
    console.log("DB Connected");
}).catch((err) => {
    console.log(res);
});

app.use('/', createUser);
app.use('/', getUsers);
app.use('/', createFolder);
app.use('/', getFolders);

app.listen(port, ()=>{
    console.log("Server started at port " + port);
})