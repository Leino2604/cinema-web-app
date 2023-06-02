const mongoose = require('mongoose')

async function connect() {
    try { 
        await mongoose.connect("mongodb://127.0.0.1:27017/cinema_web_app", {
             useNewUrlParser: true,
             useUnifiedTopology: true,
           })
        console.log('Successfully connected');
    } catch (err) {
        console.log('Failed to connect');
    }
}

module.exports = {connect }