const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
// id pk uniq
// name 
// start date
// end date
// createdon
// desc
// imgsrc 
// redictionURL
// status (t/f)

    name : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },

    start_date : {
        type : Date,
        required : true,
    },

    end_date : {
        type : Date,
        required : true,
    },

    created_on : {
        type : Date,
        required : true,
        default : Date.now()
    },

    description : {
        type : String,
        default : '',
        trim : true 
    },

    imgsrc : {
        type : String,
        required : true,
        trim : true,
    },

    redirection_url : {
        type : String,
        required : true,
        trim : true,
        match : [/^https?:\/\/[^\s$.?#].[^\s]*$/,
                 'Enter a valid redirection url'
    ]},

    status : {
        type : Boolean,
        default : true, // true = active, false = inactive
    }

});

module.exports = mongoose.model('event', eventSchema)