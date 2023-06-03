const router = require("express").Router();
const authController = require("../controller/authController");
const middlewareController = require("../controller/middlewareController");

// Signup
router.post("/signup", authController.signupUser);

// Login
router.post('/login', authController.loginUser)

// refresh token
router.post('/refresh', authController.requestRefreshToken)

//Log out
router.post('/logout', middlewareController.vertifyToken, authController.userLogout)

module.exports = router;