const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminController');
const jwtMiddleware = require('../Middelware/auth');

router.post('/add-user', jwtMiddleware, adminController.add_admin);
router.post('/login', adminController.login);

module.exports = router;