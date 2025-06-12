const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  countryCode: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // prevent duplicate subscriptions
    lowercase: true,
    trim: true,
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please enter a valid email.",
    ],
  },
  number: {
    type: String,
    required: true,
    trim: true,
  },
  created_on: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Subscriber", subscriberSchema);
