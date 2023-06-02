const express = require('express');
const router = express.Router();
const Ticket = require('../models/ticketModel');

// Get all tickets
router.get('/', async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one ticket
router.get('/:id', getTicket, (req, res) => {
  res.json(res.ticket);
});

// Create one ticket
router.post('/', async (req, res) => {
  const ticket = new Ticket({
    guestID: req.body.guestID,
    roomID: req.body.roomID,
    movieID: req.body.movieID,
    movieShowtime: req.body.movieShowtime,
    seatNumber: req.body.seatNumber
  });

  try {
    const newTicket = await ticket.save();
    res.status(201).json(newTicket);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update one ticket
router.patch('/:id', getTicket, async (req, res) => {
  if (req.body.guestID != null) {
    res.ticket.guestID = req.body.guestID;
  }
  if (req.body.roomID != null) {
    res.ticket.roomID = req.body.roomID  }
  if (req.body.movieID != null) {
    res.ticket.movieID = req.body.movieID;
  }
  if (req.body.movieShowtime != null) {
    res.ticket.movieShowtime = req.body.movieShowtime;
  }
  if (req.body.seatNumber != null) {
    res.ticket.seatNumber = req.body.seatNumber;
  }
  try {
    const updatedTicket = await res.ticket.save();
    res.json(updatedTicket);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete one ticket
router.delete('/:id', getTicket, async (req, res) => {
  try {
    await res.ticket.remove();
    res.json({ message: 'Deleted ticket' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getTicket(req, res, next) {
  let ticket;
  try {
    ticket = await Ticket.findById(req.params.id);
    if (ticket == null) {
      return res.status(404).json({ message: 'Cannot find ticket' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.ticket = ticket;
  next();
}

module.exports = router;