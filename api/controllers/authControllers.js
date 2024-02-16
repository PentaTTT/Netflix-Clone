const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");


// Access Token
const createAccessToken = (user) => {
    return jwt.sign({
        id: user.id,
        isAdmin: user.isAdmin,
    },
        process.env.JWT_ACCESS_KEY,
        { expiresIn: "7d" }
    )
}

// Refresh Token
const createRefreshToken = (user) => {
    return jwt.sign({
        id: user.id,
        admin: user.admin,
    },
        process.env.JWT_REFRESH_KEY,
        { expiresIn: "365d" }
    )
}

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
            return res.status(500).json(err)
        }
    },

    // LOGIN
    login: async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (!user) { return res.status(401).json('Email is not exist!') }

            //decrypt
            const bytes = CryptoJS.AES.decrypt(
                user.password,
                process.env.SECRET_KEY
            );

            const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
            if (originalPassword !== req.body.password) {
                return res.status(401).json('Wrong password!')
            }

            const { password, ...info } = user._doc;

            //create token
            const accessToken = createAccessToken(user);
            const refreshToken = createRefreshToken(user);
            //save token
            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: false,
                path: "/",
                sameSite: "strict"
            })

            res.status(200).json({ ...info, accessToken })

        } catch (err) {
            res.status(500).json(err)
        }
    },

    // REFRESH
    refresh: async (req, res) => {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.status(401).json("You're not authenticated!");
        jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
            if (err) {
                console.log(err);
            }
            //Crete new access token, refresh token
            const newAccessToken = createAccessToken(user);
            const newRefreshToken = createRefreshToken(user);
            res.cookie("refreshToken", newRefreshToken, {
                httpOnly: true,
                secure: false,
                path: "/",
                sameSite: "strict"
            })
            res.status(200).json({ accessToken: newAccessToken });
        })
        // res.status(200).json(refreshToken)
    }
}

module.exports = authControllers