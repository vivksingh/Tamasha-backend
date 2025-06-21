const OfferClaim = require("../Models/offerClaim");

exports.  claimOffer = async (req, res) => {
  try {
    const {
      offer_id,
      fname,
      lname,
      email,
      phone,
      celebrateDate,
      instagram,
      guestName,
    } = req.body;

    if (!fname || !lname || !email || !phone || !celebrateDate || !guestName) {
      return res.status(400).json({ error: "Please fill all required fields" });
    }

    const newClaim = new OfferClaim({
      offer_id,
      fname,
      lname,
      email,
      phone,
      celebrateDate,
      instagram,
      guestName,
    });

    await newClaim.save();

    res.status(200).json({ message: "Offer claimed successfully" });
  } catch (error) {
    console.error("Claim error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
