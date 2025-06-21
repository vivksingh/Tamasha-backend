const careerInquiry = require("../Models/careerInquiry");

async function addCareerInquiry(req, res){
    const {
        firstName,
        lastName,
        phone,
        email,
        dob,
        social,
        role
    } = req.body;

    try{
        const newInquiry = await new careerInquiry({
            firstName,
            lastName,
            phone,
            email,
            dob,
            social,
            role
        });

        await newInquiry.save();
        res.status(201).json({
            message : "Inquiry submitted successfully"
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            error : err
        })
    }
}

module.exports = { addCareerInquiry }