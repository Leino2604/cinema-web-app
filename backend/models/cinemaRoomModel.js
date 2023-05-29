const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
  seatNumber: { type: Number },
  guestID: { type: mongoose.Schema.Types.ObjectId, ref: 'Guest' }
});

const movieSchema = new mongoose.Schema({
  movieID: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
  movieShowtime: { type: Date },
  seats: [seatSchema]
});

const cinemaRoomSchema = new mongoose.Schema({
  roomNumber: { type: Number },
  roomClass: { type: String, enum: ['regular', 'gold', 'platinum'] },
  movies: [movieSchema]
});

const CinemaRoom = mongoose.model('CinemaRoom', cinemaRoomSchema);

module.exports = CinemaRoom;