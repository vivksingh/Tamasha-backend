require('dotenv').config();
const express = require('express');
const mongoosh = require('momgoosh');
const cors = require('cors');
const eventRoutes = require('./Routes/eventRoutes');
const adminRoutes = require('./Routes/adminRoutes');
const PORT = process.env.PORT || 5000;

// configs
const app = express();
app.use(express.json())
app.use(cors());

// routes
app.use('/api/event', eventRoutes);
app.use('/api/admin', adminRoutes);


// MongoDB connection
mongoosh.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiesTopology: true, 
}).then(() => {
    console.log('MongoDB Connected');
    app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
}).catch(error => {
    console.log(error)
})