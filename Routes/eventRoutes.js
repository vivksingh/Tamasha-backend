const express = require('express');
const router = express.Router();
const jwtMiddleware = require('../Middelware/auth');
const eventController = require('../Controllers/eventController');
const upload = require('../Middelware/imgUpload');

router.get('/getAllEvents', eventController.getAllEvents);
router.post('/vip-table', eventController.addVipTable);
router.post('/add-function-inquiry', eventController.addFunctionInquiry);
router.post("/edit-event/:id", jwtMiddleware, upload, eventController.editEvent);
router.post("/subscribe", eventController.addSubscriber);
router.get('/get/:id', eventController.getEvent);
router.post('/add-event', jwtMiddleware, upload, eventController.addEvent);

module.exports = router;