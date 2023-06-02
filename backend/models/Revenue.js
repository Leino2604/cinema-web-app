const mongoose = require("mongoose");

// Định nghĩa schema cho các bộ phim
const filmSchema = new mongoose.Schema({
  name: String,
  revenue: Number,
  tickets_sold: Number,
});

// Định nghĩa schema cho các món ăn
const foodSchema = new mongoose.Schema({
  name: String,
  revenue: Number,
  quantity_sold: Number,
});

// Định nghĩa schema cho các rạp
const theaterSchema = new mongoose.Schema({
  name: String,
  films: [filmSchema],
  foods: [foodSchema]
});

// Định nghĩa schema cho dữ liệu doanh thu
const revenueSchema = new mongoose.Schema({
  // Json không hỗ trợ Date
  date: String,
  theaters: [theaterSchema]
});

// Tạo model, tương ứng với collection (revenues trong mongodb compass)
module.exports = mongoose.model('Revenue', revenueSchema);


