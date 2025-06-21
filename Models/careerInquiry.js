const mongoose = require("mongoose");

const careerInquirySchema = mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        trim : true
    },

    lastName : {
        type : String,
        trim : true
    },
     
    phone : {
        type : String,
        required : true
    },

    email : {
        type: String,
        required : true
    },

    dob : {
        type : Date,
        required : true
    },

    social : {
        type : String,
        required : true
    },

    role : {
        type : String,
        required : true
    },

    created_on : {
        type : Date,
        default : Date.now(),
    }
});

module.exports = mongoose.model("careerInquiry", careerInquirySchema);