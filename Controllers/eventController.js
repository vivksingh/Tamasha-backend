const Event = require('../Models/event');

async function getAllEvents(req, res){
    try{
        const events = await Events.find({status : true}).sort({created_on : -1});
        res.status(200).json(events);
    }
    catch(err){
        res.status(500).join({error : err.message});
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
        const newEvent = new Event(req.body);
        newEvent.save();

        res.status(201).json({ message : 'Event Created Successfully' });
    }
    catch(err){
        res.status(500).json({ error : err.message });
    }
}

module.exports = { getAllEvents, getEvent, addEvent }
