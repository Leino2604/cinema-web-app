const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  guestID: { type: mongoose.Schema.Types.ObjectId, ref: 'Guest' },
  roomID: { type: mongoose.Schema.Types.ObjectId, ref: 'CinemaRoom' },
  movieID: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
  movieShowtime: { type: Date },
  seatNumber: { type: Number }
});

const guestSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String },
  phoneNumber: { type: String, match: [/^\d{10}$/, 'Số điện thoại không hợp lệ'] },
  tickets: [ticketSchema]
});

const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;