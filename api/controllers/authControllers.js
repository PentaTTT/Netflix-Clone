const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const authControllers = {
    // REGISTER
    registerUser: async (req, res) => {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
            ).toString()
        });

        try {
            const user = await newUser.save();
            res.status(200).json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // LOGIN
    login: async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email });
            !user && res.status(401).json('Email is not exist!')

            //decrypt
            const bytes = CryptoJS.AES.decrypt(
                user.password,
                process.env.SECRET_KEY
            );

            const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
            originalPassword !== req.body.password &&
                res.status(401).json('Wrong password!')

            const { password, ...info } = user._doc;

            //create token
            const accessToken = jwt.sign(
                {
                    id: user.id,
                    isAdmin: user.isAdmin,
                },
                process.env.JWT_ACCESS_KEY,
                { expiresIn: "2h" }
            )
            res.status(200).json({ ...info, accessToken })

        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = authControllers