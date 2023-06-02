const router = require("express").Router();

const userController = require("../controller/userController");
const middlewareController = require("../controller/middlewareController");

// get all users
router.get('/', middlewareController.vertifyToken, userController.getAllUsers)

// delete user
router.delete('/:id', middlewareController.vertifyTokenAdmin, userController.deleteUser)

module.exports = router;