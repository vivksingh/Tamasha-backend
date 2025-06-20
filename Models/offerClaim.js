const mongoose = require("mongoose");

const offerClaimSchema = new mongoose.Schema({
  offer_id : {type: mongoose.Schema.Types.ObjectId, ref:'Offer' },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  celebrateDate: { type: Date, required: true },
  instagram: { type: String },
  guestName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("OfferClaim", offerClaimSchema);
