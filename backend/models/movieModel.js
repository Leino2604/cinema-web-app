const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  movieName: { type: String, maxlength: 50 },
  description: { type: String, maxlength: 300 },
  movieLength: { type: String },
  movieBanner: { type: String }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;