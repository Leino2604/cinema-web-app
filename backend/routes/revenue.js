const router = require("express").Router();
const revenueController = require("../controller/revenueController");

// get all users
// localhost:5000/revenuedata?month=1&&year=2002
// Test hiển thị dữ liệu đầu vào của revenue
router.get('/revenueData', revenueController.getDataRevenue)

// handle data revenue
router.get('/revenue', revenueController.handleDataRevenue)

module.exports = router;