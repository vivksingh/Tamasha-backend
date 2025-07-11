require('dotenv').config();
const multer = require('multer');
const express = require('express');
const cors = require('cors');
const path = require('path')
const mongoose = require('mongoose');

const eventRoutes = require('./Routes/eventRoutes');
const adminRoutes = require('./Routes/adminRoutes');
const offerRoutes = require('./Routes/offerRoutes');
const careerRoute = require('./Routes/careerRoute');
const newsRoutes = require('./Routes/newsRoutes');

const PORT = process.env.PORT || 5000;

// default configs
const app = express();
app.use(express.json())
app.use(cors());

// routes
app.use('/api/event', eventRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/offers', offerRoutes);
app.use('/api/careers', careerRoute);
app.use('/api/news', newsRoutes);

app.use('/uploads', express.static('uploads'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
}).then(() => {
    console.log('MongoDB Connected');
    app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
}).catch(error => {
    console.log(error)
})
    

