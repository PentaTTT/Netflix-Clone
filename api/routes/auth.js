const authControllers = require('../controllers/authControllers');

const router = require('express').Router();

//REGISTER
router.post("/register", authControllers.registerUser)

//LOGIN
router.post("/login", authControllers.login)

module.exports = router;