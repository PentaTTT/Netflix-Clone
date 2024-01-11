const User = require('../models/User')

const userControllers = {
    // GET ALL USERS
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // UPDATE USER
    updateUser: async (req, res) => {
        if (req.user.id === req.params.id || res.user.isAdmin) {
            if (req.body.password) {
                req.body.password = CryptoJS.AES.encrypt(
                    req.body.password,
                    process.env.SECRET_KEY
                ).toString();
            }

            try {
                const updateUser = await User.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                },
                    { new: true }
                );
                res.status(200).json(updateUser);
            } catch (err) {
                res.status(500).json(err)
            }

        } else {
            res.status(403).json('You can update only your account!')
        }
    }
}

module.exports = userControllers