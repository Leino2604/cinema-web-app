const User = require("../models/User");

const userController = {
    // Get all user
    getAllUsers: async(req, res) => {
        try {
            const user = await User.find();
            return res.status(200).json(user)
        }catch (err) {
            return res.status(500).json(err)
        }
    },

    // Delete user (admin)
    // Xóa theo id
    deleteUser: async(req, res) => {
        try {
            // const user = await User.findByIdAndDelete(req.params.id);
            const user = await User.findById(req.params.id);
            return res.status(200).json("Xóa thành công")
        } catch (err) {
            return res.status(500).json(err)
        }
    }
}

module.exports = userController;