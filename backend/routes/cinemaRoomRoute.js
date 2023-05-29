const express = require('express');
const router = express.Router();
const CinemaRoom = require('../models/cinemaRoomModel');

// Get all cinema rooms
router.get('/', async (req, res) => {
  try {
    const cinemaRooms = await CinemaRoom.find().populate({
      path: 'movies.movieID',
      select: 'movieName description'
    });
    res.json(cinemaRooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one cinema room
router.get('/:id', getCinemaRoom, (req, res) => {
  res.json(res.cinemaRoom);
});

// Create one cinema room
router.post('/', async (req, res) => {
  const cinemaRoom = new CinemaRoom({
    roomNumber: req.body.roomNumber,
    roomClass: req.body.roomClass
  });

  try {
    const newCinemaRoom = await cinemaRoom.save();
    res.status(201).json(newCinemaRoom);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update one cinema room
router.patch('/:id', getCinemaRoom, async (req, res) => {
  if (req.body.roomNumber != null) {
   res.cinemaRoom.roomNumber = req.body.roomNumber;
  }
  if (req.body.roomClass != null) {
    res.cinemaRoom.roomClass = req.body.roomClass;
  }
  try {
    const updatedCinemaRoom = await res.cinemaRoom.save();
    res.json(updatedCinemaRoom);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete one cinema room
router.delete('/:id', getCinemaRoom, async (req, res) => {
  try {
    await res.cinemaRoom.remove();
    res.json({ message: 'Deleted cinema room' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add movie to cinema room
router.post('/:id/movies', getCinemaRoom, async (req, res) => {
  const movie = {
    movieID: req.body.movieID,
    movieShowtime: req.body.movieShowtime,
    seats: []
  };
  res.cinemaRoom.movies.push(movie);
  try {
    const updatedCinemaRoom = await res.cinemaRoom.save();
    res.status(201).json(updatedCinemaRoom.movies[updatedCinemaRoom.movies.length - 1]);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete movie from cinema room
router.delete('/:id/movies/:movieId', getCinemaRoom, async (req, res) => {
  const movieIndex = res.cinemaRoom.movies.findIndex(movie => movie._id == req.params.movieId);
  if (movieIndex == -1) {
    return res.status(404).json({ message: 'Cannot find movie in cinema room' });
  }
  res.cinemaRoom.movies.splice(movieIndex, 1);
  try {
    const updatedCinemaRoom = await res.cinemaRoom.save();
    res.json({ message: 'Deleted movie from cinema room' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add seat to movie in cinema room
router.post('/:id/movies/:movieId/seats', getCinemaRoom, async (req, res) => {
  const movieIndex = res.cinemaRoom.movies.findIndex(movie => movie._id == req.params.movieId);
  if (movieIndex == -1) {
    return res.status(404).json({ message: 'Cannot find movie in cinema room' });
  }
  const seat = {
    seatNumber: req.body.seatNumber,
    guestID: null
  };
  res.cinemaRoom.movies[movieIndex].seats.push(seat);
  try {
    const updatedCinemaRoom = await res.cinemaRoom.save();
    const updatedMovie = updatedCinemaRoom.movies[movieIndex];
    res.status(201).json(updatedMovie.seats[updatedMovie.seats.length - 1]);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update guest ID for seat in movie in cinema room
router.patch('/:id/movies/:movieId/seats/:seatNumber', getCinemaRoom, async (req, res) => {
  const movieIndex = res.cinemaRoom.movies.findIndex(movie => movie._id == req.params.movieId);
  if (movieIndex == -1) {
    return res.status(404).json({ message: 'Cannot find movie in cinema room' });
  }
  const seatIndex = res.cinemaRoom.movies[movieIndex].seats.findIndex(seat => seat.seatNumber == req.params.seatNumber);
  if (seatIndex == -1) {
    return res.status(404).json({ message: 'Cannot find seat in movie in cinema room' });
  }
  res.cinemaRoom.movies[movieIndex].seats[seatIndex].guestID = req.body.guestID;
  try {
    const updatedCinemaRoom = await res.cinemaRoom.save();
    const updatedMovie = updatedCinemaRoom.movies[movieIndex];
    const updatedSeat = updatedMovie.seats[seatIndex];
    res.json(updatedSeat);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

async function getCinemaRoom(req,res, next) {
  let cinemaRoom;
  try {
    cinemaRoom = await CinemaRoom.findById(req.params.id).populate({
      path: 'movies.movieID',
      select: 'movieName description'
    });
    if (cinemaRoom == null) {
      return res.status(404).json({ message: 'Cannot find cinema room' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.cinemaRoom = cinemaRoom;
  next();
}

module.exports = router;