const Offer = require('../Models/offer');

async function getOffers(req, res){
    try{
        const offers = await Offer.find({status: true}).sort({created_on: 1});
        res.status(200).json(offers);
    }
    catch(err){
        console.error("Error fetching offers:", err);
        res.status(500).json({message: "Internal Server Error"});
    }
}

async function postOffer(req, res){
    try {
        const { title, description, event_id, valid_till, valid_from, status } = req.body;
        const newOffer = new Offer({
            title,
            description,
            event_id,
            valid_from,
            valid_till,
            imgsrc : req.file.path,
            status : status !== undefined ? status : true,

        });
        await newOffer.save();
        res.status(201).json(newOffer);
    } catch (err) {
        console.error("Error creating offer:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = { getOffers, postOffer };