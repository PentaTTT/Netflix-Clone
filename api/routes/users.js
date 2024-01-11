const userControllers = require('../controllers/userControllers');
const middlewareController = require('../controllers/middlewareControllers')
const router = require('express').Router();
const CryptoJS = require('crypto-js')

// GET ALL USERS
router.get("/", userControllers.getAllUsers);

// FETCH USER

// GET

// UPDATE
router.put("/:id", middlewareController.verifyToken, userControllers.updateUser);

// DELETE

module.exports = router