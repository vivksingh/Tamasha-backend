const mongoose = require('mongoose');

const functionInquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
  },

  phone: {
    type: String,
    required: true,
    trim: true,
  },

  company: {
    type: String,
    trim: true,
    default: '',
  },

  eventType: {
    type: String,
    required: true,
    trim: true,
  },

  date: {
    type: Date,
    required: true,
  },

  guests: {
    type: String,
    required: true,
    trim: true,
  },

  budget: {
    type: String,
    required: true,
    trim: true,
  },

  message: {
    type: String,
    trim: true,
    default: '',
  },

  created_on: {
    type: Date,
    default: Date.now,
  },
});

const FunctionInquiry = mongoose.model('FunctionInquiry', functionInquirySchema);

module.exports = FunctionInquiry;
