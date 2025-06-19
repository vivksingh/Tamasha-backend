const mongoose = require('mongoose');

const OfferSchema = new mongoose.Schema({
  title: { type: String, required: true },              // e.g., "Free Pass for Hen + 1 Guest"
  description: { type: String, required: true },        // e.g., "Celebrate your hen night in style..."
  event_id: { type: mongoose.Schema.Types.ObjectId, ref: 'event' }, // Optional: link to an event
  status: { type: Boolean, default: true },
  imgsrc : {type: String, required:true},           // Toggle offer visibility
  valid_from: { type: Date, default: Date.now },
  valid_till: { type: Date },                            // Optional end date
  created_on: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Offer', OfferSchema);
