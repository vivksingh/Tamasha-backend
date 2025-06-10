const Admin = require('../Models/admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

async function add_admin(req, res){
    const { username, email, password } = req.body;

    try{
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin with this email already exists.' });
        }
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newAdmin = new Admin({ username, email, passwordHash : hashedPassword });

        await newAdmin.save();
        res.status(201).json({message : 'Admin registered :) '});
    }
    catch(err){
        res.status(500).json({error : err.message})
    }
}

async function login(req, res){
    const { email, password } = req.body;

    try{
        const currentAdmin = await Admin.findOne({ email });
        if(!currentAdmin) return res.status(400).json({message : 'Invalid email'});

        const ismatch = await bcrypt.compare(password, currentAdmin.passwordHash);
        if(!ismatch) return res.status(400).json({message : 'invalid password'});

        const token = jwt.sign(
            { id: currentAdmin._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ token });
    }

    catch(err){
        res.status(500).json({message : err.message})
    }
}


module.exports = { add_admin, login }