const mongoose = require('mongoose')


// Thông tin của user gồm các trường: 
// usename (duy nhất), password, emaik(duy nhất), role (admin, manage, employee, guess)

const userSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
            minLength: 6,
            maxLength: 20,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            minLength: 10,
            maxLength: 40,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
        },
        dob: {
            type: Date,
        },
        role: {
            type: String,
            default: 'Guest'
        },
    }, {timestamps: true}
);

module.exports = mongoose.model('User', userSchema);
