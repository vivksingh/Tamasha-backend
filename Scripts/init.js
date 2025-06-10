require('dotenv').config({ path : '../.env' });
const mongoose = require('mongoose');
const Admin = require('../Models/admin');

const username = 'user';
const email = 'user@gmail.com';
const passwordStr = 'password';

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology : true,
    useNewUrlParser : true,

}).then(async() => {
    console.log("Script connected to mongo db");
    const bcrypt = require('bcrypt');
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(passwordStr, salt);

    await Admin.create({
        username,
        email,
        passwordHash : password,
    });

    mongoose.disconnect();
    console.log('Admin Created');
}).catch(err => {
    console.log(err);
    mongoose.disconnect();
});
