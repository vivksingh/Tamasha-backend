const mongoose = require('mongoose');

const vipTableSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true
    },

    phone: {
        type: String,
        required: true,
        trim: true
    },

    event: {
        type: String,
        required: true,
        trim: true
    },

    guests: {
        type: String,
        required: true,
        trim: true
    },

    message: {
        type: String,
        default: '',
        trim: true
    },

    created_on: {
        type: Date,
        default: Date.now
    }
});

const VipTable = mongoose.model('VipTable', vipTableSchema);

module.exports = VipTable;
