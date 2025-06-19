const express = require('express');
const offerController = require('../Controllers/offerController');
const router = express.Router();
const jwtMiddleware = require('../Middelware/auth');
const upload = require('../Middelware/imgUpload');

router.get('/all-offers', offerController.getOffers);
router.post('/add-offer', jwtMiddleware, upload, offerController.postOffer);

module.exports = router;