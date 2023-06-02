const express = require("express");
const router = express.Router();
const Guest = require("../models/guestModel");

// Get all guests
router.get("/", async (req, res) => {
  try {
    const guests = await Guest.find();
    res.json(guests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one guest
router.get("/:id", getGuest, (req, res) => {
  res.json(res.guest);
});

// Create one guest
router.post("/", async (req, res) => {
  const guest = new Guest({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
  });

  try {
    const newGuest = await guest.save();
    res.status(201).json(newGuest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update one guest
router.patch("/:id", getGuest, async (req, res) => {
  if (req.body.firstName != null) {
    res.guest.firstName = req.body.firstName;
  }
  if (req.body.lastName != null) {
    res.guest.lastName = req.body.lastName;
  }
  if (req.body.email != null) {
    res.guest.email = req.body.email;
  }
  if (req.body.phone != null) {
    res.guest.phone = req.body.phone;
  }
  try {
    const updatedGuest = await res.guest.save();
    res.json(updatedGuest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete one guest
router.delete("/:id", getGuest, async (req, res) => {
  try {
    await res.guest.remove();
    res.json({ message: "Deleted guest" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getGuest(req, res, next) {
  let guest;
  try {
    guest = await Guest.findById(req.params.id);
    if (guest == null) {
      return res.status(404).json({ message: "Cannot find guest" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.guest = guest;
  next();
}

module.exports = router;
