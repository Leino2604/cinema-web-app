const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/cinema', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB!');
});

app.use(express.json());

// Routes
const cinemaRoomRoute = require('./routes/cinemaRoomRoute');
const movieRoute = require('./routes/movieRoute');
const guestRoute = require('./routes/guestRoute');
const staffRoute = require('./routes/staffRoute');
const ticketRoute = require('./routes/ticketRoute');


app.use('/cinema-rooms', cinemaRoomRoute);
app.use('/movies', movieRoute);
app.use('/guests', guestRoute);
app.use('/staffs', staffRoute);
app.use('/tickets', ticketRoute);


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});