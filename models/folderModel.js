const mongoose = require('mongoose');
const folderModel = mongoose.model("spark_folders", {
    user: String,
    folders: [{
        name: String,
        url: String
    }]
})

module.exports=folderModel;