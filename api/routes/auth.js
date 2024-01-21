const authControllers = require('../controllers/authControllers');

const router = require('express').Router();

//REGISTER
router.post("/register", authControllers.registerUser)

//LOGIN
router.post("/login", authControllers.login)

// REFRESH
router.post("/refresh", authControllers.refresh)

module.exports = router;