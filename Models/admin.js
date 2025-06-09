const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
    },

    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
        match : [/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                 "Please enter a valid email :("]
    },

    passwordHash : {
        type : String,
        required : true,
    },

    createdAt : {
        type : Date,
        default : Date.now()
    },
})

module.exports = mongoose.model('admin', adminSchema);