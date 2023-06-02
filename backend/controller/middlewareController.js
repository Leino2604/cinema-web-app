const jwt = require('jsonwebtoken');

const middlewareController = {
    // Xác minh token
    vertifyToken: (req, res, next) => {
        const token = req.headers.token
        // Bearer token
        if(token) {
            const aToken = token.split(" ")[1]
            jwt.verify(aToken, "access_key_cinema", (err, user) => {
                if(err) {
                    return res.status(403).json("Token is not valid")
                }
                req.user = user;
                next()
            })
        }else {
            res.status(401).json("Authen failed")
        }
    },

    vertifyTokenAdmin: (req, res, next) => {
        middlewareController.vertifyToken(req, res, ()=> {
            if(req.user.role === 'Admin') {
                next()
            }else {
                return res.status(403).json("Bạn không có quyền làm việc này")
            }
        });
    },

    vertifyTokenManage: (req, res, next) => {
        middlewareController.vertifyToken(req, res, ()=> {
            if(req.user.role === 'Quản lý') {
                next()
            }else {
                return res.status(403).json("Bạn không có quyền làm việc này")
            }
        });
    },

    vertifyTokenEmp: (req, res, next) => {
        middlewareController.vertifyToken(req, res, ()=> {
            if(req.user.role === 'Nhân viên') {
                next()
            }else {
                return res.status(403).json("Bạn không có quyền làm việc này")
            }
        });
    },

}

module.exports = middlewareController;