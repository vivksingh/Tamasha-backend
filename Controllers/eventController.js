const Event = require('../Models/event');
const VipTable = require('../Models/vipTable'); 
const FunctionInquiry = require('../Models/functionInquiry');
const Subscriber = require("../Models/subscriber");

async function getAllEvents(req, res){
    try{
        const events = await Event.find().sort({created_on : 1});
        res.status(200).json(events);
    }
    catch(err){
        res.status(500).json({error : err.message});
    }
}

async function getEvent(req, res){
    const { id } = req.params;

    try{
        const event = await Event.findOne({ _id : id });

        if(!event) return res.status(404).json({ message : 'Event not found' });

        res.status(200).json(event);
    }
    catch(err){
        res.status(500).json({error : err.message});
    }

}

async function addEvent(req, res){
    
    try{
        // console.log(req.file);
        // console.log(req.body);
        const {
            name,
            start_date,
            end_date,
            created_on,
            description,
            redirection_url,
            status
        } = req.body;

        const newEvent = new Event({
            name,
            start_date: new Date(start_date),
            end_date: new Date(end_date),
            created_on: new Date(),
            description,
            redirection_url,
            status : status === 'true' ? true : false,
            imgsrc : req.file.path
        });

        await newEvent.save();
        res.status(201).json({message : "Created successfully"});
    }
    catch(err){
        //console.error(err);
        res.status(500).json({ error : err.message });
    }
}




async function addVipTable(req, res) {
  try {
    const {
      name,
      email,
      phone,
      eventType,
      date,
      guests,
      budget,
      message
    } = req.body;

    const newVipTable = new VipTable({
      name,
      email,
      phone,
      eventType,
      date,
      guests,
      budget,
      message
    });

    await newVipTable.save();
    res.status(201).json({ message: "VIP Table request submitted successfully" });
  } catch (err) {
    console.error("VIP table save error:", err);
    res.status(500).json({ error: err.message });
  }
}




async function addFunctionInquiry(req, res) {
  try {
    const {
      name,
      email,
      phone,
      company,
      eventType,
      date,
      guests,
      budget,
      message,
    } = req.body;

    const newInquiry = new FunctionInquiry({
      name,
      email,
      phone,
      company,
      eventType,
      date: new Date(date),
      guests,
      budget,
      message,
    });

    await newInquiry.save();

    res.status(201).json({ message: "Function inquiry submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function editEvent(req, res) {
  const { id } = req.params;

  try {
    // Find existing event
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    // Update fields from req.body
    event.name = req.body.name || event.name;
    event.start_date = req.body.start_date ? new Date(req.body.start_date) : event.start_date;
    event.end_date = req.body.end_date ? new Date(req.body.end_date) : event.end_date;
    event.description = req.body.description || event.description;
    event.redirection_url = req.body.redirection_url || event.redirection_url;
    event.status = req.body.status === "true" ? true : false;

    // If a new image is uploaded, update it
    if (req.file) {
      event.imgsrc = req.file.path; // Or use your path logic here
    }

    // Save updated event
    await event.save();

    res.status(200).json({ message: "Event updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}



async function addSubscriber(req, res) {
  try {
    const { firstName, lastName, countryCode, email, number } = req.body;

    // Basic validation
    if (!firstName || !lastName || !countryCode || !email || !number) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check for duplicate email
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(409).json({ message: "You are already subscribed with this email." });
    }

    // Save new subscriber
    const newSubscriber = new Subscriber({
      firstName,
      lastName,
      countryCode,
      email,
      number,
    });

    await newSubscriber.save();

    res.status(201).json({ message: "Subscription successful! Thank you." });
  } catch (err) {
    console.error("Error adding subscriber:", err);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
}

async function getAllEventsForAdmin(req, res){
  try{
    const events = await Event.find().sort({created_on : 1});
    res.status(200).json(events); 
  }
  catch(err){
    res.status(500).json({error : err.message});
  }
}



module.exports = { getAllEvents, getEvent, addEvent, addVipTable, addFunctionInquiry, editEvent, addSubscriber, getAllEventsForAdmin };
