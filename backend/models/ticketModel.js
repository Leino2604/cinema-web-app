const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  guestID: { type: mongoose.Schema.Types.ObjectId, ref: 'Guest' },
  roomID: { type: mongoose.Schema.Types.ObjectId, ref: 'CinemaRoom' },
  movieID: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
  movieShowtime: { type: Date },
  seatNumber: { type: Number }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;