const express = require('express');
const router = express.Router();
const jwtMiddleware = require('../Middelware/auth');
const eventController = require('../Controllers/eventController');

router.get('/getAllEvents', eventController.getAllEvents);
router.get('/get/:id', eventController.getEvent);
router.post('/addEvent', jwtMiddleware, eventController.addEvent);

module.exports = router;