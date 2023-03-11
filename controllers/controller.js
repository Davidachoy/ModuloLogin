const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const registerView = (req, res) => {
    res.render("register", {
    } );
};

const loginView = (req, res) => {

    /*res.render("login", {
        
    } );*/

    res.sendFile("/Users/jsc190/Projects/ModuloLogin/views/login.html");
};

const registerUser = async (req, res) => {
    let { email, firstName, lastName, username, password, discord, phone, gender, birthDate, identification, 
        academicInstitution, shirtSize, medicalConditions, dietaryConditions, hasParticipated, knowledge } = req.body;
    
    if (!email || !firstName || !lastName || !username || !password || !discord || !phone || !gender || !birthDate || !academicInstitution) {
        throw new Error('You must fill all required fields!');
    }

    let emailExists = await User.findById(email);
    if (emailExists) throw new Error('email is already registered!');

    let userExists = await User.findOne({ username });
    if (userExists) throw new Error('User already exists!');

    //Encrypting password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) throw err;

        const token = jwt.sign(
            { user: email, username },
            process.env.TOKEN_KEY,

        );

        const user = new User({
            email, 
            firstName, 
            lastName, 
            username, 
            password: hashedPassword, 
            discord, 
            phone, 
            gender, 
            birthDate, 
            identification, 
            academicInstitution, 
            shirtSize, 
            medicalConditions, 
            dietaryConditions, 
            hasParticipated, 
            knowledge,
        });

        user.save()
            .then(res.redirect())
    });
};

module.exports =  {
    registerView,
    loginView
};