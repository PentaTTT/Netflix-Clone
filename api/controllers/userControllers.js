const User = require('../models/User')

const userControllers = {
    // GET ALL USERS
    getAllUsers: async (req, res) => {
        const query = req.query.new;
        if (req.user.isAdmin) {
            try {
                const users = query ? await User.find().sort({ id: -1 }).limit(5) : await User.find();
                res.status(200).json(users)
            } catch (err) {
                res.status(500).json(err)
            }
        }
        else {
            res.status(403).json("You are not allowed to see all users!")
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
    },

    // DELETE USER
    deleteUser: async (req, res) => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            try {
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json("Delete successfully!")
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(403).json("You're cannot delete other user!")
        }
    },

    // FIND USER BY ID
    findUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            const { password, ...info } = user._doc;
            res.status(200).json(info)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // FETCH USER STATS
    fetchUser: async (req, res) => {
        const today = new Date();
        const lastYear = today.setFullYear(today.setFullYear() - 1)

        const monthsArray = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        try {
            const data = await User.aggregate([
                {
                    $project: {
                        month: { $month: "$createdAt" }
                    },
                },
                {
                    $group: {
                        _id: "$month",
                        total: { $sum: 1 },
                    },
                },
            ]);
            res.status(200).json(data)

        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = userControllers