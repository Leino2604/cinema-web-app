const express = require('express');
const router = express.Router();
const Staff = require('../models/staffModel');

// Get all staffs
router.get('/', async (req, res) => {
  try {
    const staffs = await Staff.find();
    res.json(staffs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one staff
router.get('/:id', getStaff, (req, res) => {
  res.json(res.staff);
});

// Create one staff
router.post('/', async (req, res) => {
  const staff = new Staff({
    name: req.body.name,
    phone: req.body.phone,
    socialID: req.body.socialID,
    DoB: req.body.DoB,
    role: req.body.role
  });

  try {
    const newStaff = await staff.save();
    res.status(201).json(newStaff);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update one staff
router.patch('/:id', getStaff, async (req, res) => {
  if (req.body.name != null) {
    res.staff.name = req.body.name;
  }
  if (req.body.phone != null) {
    res.staff.phone = req.body.phone;
  }
  if (req.body.socialID != null) {
    res.staff.socialID = req.body.socialID;
  }
  if (req.body.DoB != null) {
    res.staff.DoB = req.body.DoB;
  }
  if (req.body.role != null) {
    res.staff.role = req.body.role;
  }
  try {
    const updatedStaff = await res.staff.save();
    res.json(updatedStaff);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete one staff
router.delete('/:id', getStaff, async (req, res) => {
  try {
    await res.staff.remove();
    res.json({ message: 'Deleted staff' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getStaff(req, res, next) {
  let staff;
  try {
    staff = await Staff.findById(req.params.id);
    if (staff == null) {
      return res.status(404).json({ message: 'Cannot find staff' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.staff = staff;
  next();
}

module.exports = router;