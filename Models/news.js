const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  
  status: {
    type: Boolean,
    default: true,
    required: true,
  },

  image: {
    type: String,
    required: true,
    trim: true,
  },

  redirect_url: {
    type: String,
    trim: true,
  },

  short_description: {
    type: String,
    required: true,
    maxlength: 200,
    trim: true,
  },

  long_description: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('News', newsSchema);
