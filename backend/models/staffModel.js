const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  name: { type: String, maxlength: 50 },
  phone: { type: String, match: [/^\d{10}$/, 'Số điện thoại không hợp lệ'] },
  socialID: { type: String, maxlength: 14 },
  DoB: { type: Date },
  role: { type: String, enum: ['nhân viên', 'quản lý', 'admin'] }
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;