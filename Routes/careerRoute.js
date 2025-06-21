const express = require('express');
const router = express.Router();
const careerController = require('../Controllers/careerController');

router.post('/career-form', careerController.addCareerInquiry);

module.exports = router;