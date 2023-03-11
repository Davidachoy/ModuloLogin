const mongoose = require("mongoose");

//_id is the email, mongoose requirement https://mongoosejs.com/docs/guide.html#_id
const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        validate: {
            validator: (email) => {
                let regex = new RegExp('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$');
                return regex.test(email);
            },
            message: 'You have entered an invalid email!'
        }
    },
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        unique: true,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    discord: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
        validate: {
            validator: (number) => {
                let regex = new RegExp("^\+\d{1,3}\d{1,14}$");
                return regex.test(number);
            },
            message: 'You have entered an invalid phone number!'
        },
    },
    gender: {
        type: String,
        require: true,
        enum: [
            'Female',
            'Male',
            'Non-binary',
            'Other'
        ],
    },
    birthDate: {
        type: Date,
        require: true,
    },
    identification: {
        type: String,
        default: null,
    },
    academicInstitution: {
        type: String,
        require: true,
    },
    shirtSize: {
        type: String,
        enum: ['XXXS', 'XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        default: 'M',
    },
    medicalConditions: {
        type: String,
        default: null,
    },
    dietaryConditions: {
        type: String,
        default: null,
    },
    isGlobalOrg: {
        type: Boolean,
        default: false,
    },
    hasParticipated: {
        type: Boolean,
        default: false,
    },
    knowledge: {
        type: Array,
        default: [],
    },
    token: { type: String },
});

module.exports = mongoose.model("User", userSchema);