// Kết nối tới MongoDB
const db = require('./config/db');
db.connect()

// 
const cookieParser = require('cookie-parser');
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cookieParser());

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const revenueRoute = require("./routes/revenue");


app.use(cors());
app.use(express.json());

app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);
app.use("/", revenueRoute)






app.listen(5000, () => {
  console.log("Server đang chạy tại port 5000");
})