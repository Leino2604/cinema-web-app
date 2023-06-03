const express = require('express');
const router = express.Router();
const Movie = require('../models/movieModel');

// Get all movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one movie
router.get('/:id', getMovie, (req, res) => {
  res.json(res.movie);
});

// Create one movie
router.post('/', async (req, res) => {
  const movie = new Movie({
    movieName: req.body.movieName,
    description: req.body.description,
    releaseYear: req.body.releaseYear,
    genre: req.body.genre,
    director: req.body.director,
    cast: req.body.cast
  });

  try {
    const newMovie = await movie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update one movie
router.patch('/:id', getMovie, async (req, res) => {
  if (req.body.movieName != null) {
    res.movie.movieName = req.body.movieName;
  }
  if (req.body.description != null) {
    res.movie.description = req.body.description;
  }
  if (req.body.releaseYear != null) {
    res.movie.releaseYear = req.body.releaseYear;
  }
  if (req.body.genre != null) {
    res.movie.genre = req.body.genre;
  }
  if (req.body.director != null) {
    res.movie.director = req.body.director;
  }
  if (req.body.cast != null) {
    res.movie.cast = req.body.cast;
  }
  try {
    const updatedMovie = await res.movie.save();
    res.json(updatedMovie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete one movie
router.delete('/:id', getMovie, async (req, res) => {
  try {
    await res.movie.remove();
    res.json({ message: 'Deleted movie' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getMovie(req, res, next) {
  let movie;
  try {
    movie = await Movie.findById(req.params.id);
    if (movie == null) {
      return res.status(404).json({ message: 'Cannot find movie' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.movie = movie;
  next();
}

module.exports = router;