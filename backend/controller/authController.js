const User = require("../models/User")
//  Xác thực bằng ten người dùng -> đơn giản -> dễ bị tấn công
// => thêm token: access (TTL bé), refresh( đề phòng trường hợp tấn công biết access token-> tạo mã khác khi access hết hạn)

const jwt = require("jsonwebtoken")
// Mã hóa mật khẩu
const bcrypt = require("bcrypt");

let refreshTokens = []
const authController = {
    //Signup
    signupUser: async(req,res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);

            // Create new user
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed,
                phone: req.body.phone,
                dob: req.body.dob
            })
            // Save to DB:
            const user = await newUser.save();
            return res.status(200).json(user);
        }catch(err) {
            return res.status(500).json(err)
        }
    },

    generateAccessToken: (user) => {
        return jwt.sign({
            id: user.id,
            role: user.role
        },
        "access_key_cinema",
        {expiresIn: "30s"}
        );
    },

    generateRefreshToken: (user) => {
        return jwt.sign({
            id: user.id,
            role: user.role
        },
        "refresh_key_cinema",
        {expiresIn: "365d"}
        );
    },

    //Login
    loginUser: async (req, res) => {
        try {
            const user = await User.findOne({ username: req.body.username });
            if (!user) {
                return res.status(404).json("Incorrect username");
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!validPassword) {
                return res.status(404).json("Incorrect password");
            }

            if(user && validPassword) {
                // access token
                const aToken = authController.generateAccessToken(user)

                //refresh token
                const rToken = authController.generateRefreshToken(user)
                refreshTokens.push(rToken)

                res.cookie("refreshToken", rToken, {
                    httpOnly: true,
                    secure: false,
                    path: "/",
                    sameSite: "strict"
                })

                const {password, ...other} = user._doc
                return res.status(200).json({...other, aToken});
            }
        }catch(err) {
            return res.status(500).json(err)
        }
    },

    //Refresh token
    requestRefreshToken: async (req, res) => {
        const rToken = req.cookies.refreshToken

    

        if(!rToken) return res.status(401).json("Not authorized")
        if(!refreshTokens.includes(rToken)) {
            return res.status(403).json("Refresh token is not valid")
        }
        jwt.verify(rToken, "refresh_key_cinema", (err, user) => {
            if(err) {
                console.log(err);
            }

            refreshTokens = refreshTokens.filter((token) => token!= rToken)

            const newAToken = authController.generateAccessToken(user)
            const newRToken = authController.generateRefreshToken(user)
            refreshTokens.push(newRToken)

            res.cookie("refreshToken", newRToken, {
                httpOnly: true,
                    secure: false,
                    path: "/",
                    sameSite: "strict"
            }
            )
            return res.status(200).json({accessToken: newAToken})
        })


    },

    //Logout
    userLogout: async(req, res) => {
        res.clearCookie("refreshToken")
        refreshTokens = refreshTokens.filter(token => token !== req.cookies.refreshToken);
        res.status(200).json("Logged out success")
    }
}

module.exports = authController;