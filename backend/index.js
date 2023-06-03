const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const mongoose = require('mongoose');
const app = express();
const port = 5000;

// Connect to MongoDB

mongoose.connect('mongodb://127.0.0.1:27017/cinema', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB!');
});

app.use(cookieParser());
app.use(cors());
app.use(express.json());

// Routes
const cinemaRoomRoute = require('./routes/cinemaRoomRoute');
const movieRoute = require('./routes/movieRoute');
const guestRoute = require('./routes/guestRoute');
const staffRoute = require('./routes/staffRoute');
const ticketRoute = require('./routes/ticketRoute');
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const revenueRoute = require("./routes/revenue");


app.use('/cinema-rooms', cinemaRoomRoute);
app.use('/movies', movieRoute);
app.use('/guests', guestRoute);
app.use('/staffs', staffRoute);
app.use('/tickets', ticketRoute);
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);
app.use("/", revenueRoute)


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});