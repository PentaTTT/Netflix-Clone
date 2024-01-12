const userControllers = require('../controllers/userControllers');
const middlewareController = require('../controllers/middlewareControllers')
const router = require('express').Router();
const CryptoJS = require('crypto-js')

// GET ALL USERS
router.get("/", middlewareController.verifyToken, userControllers.getAllUsers);

// FETCH USER
router.get("/stats", userControllers.fetchUser)

// GET
router.get("/find/:id", userControllers.findUser)

// UPDATE
router.put("/:id", middlewareController.verifyToken, userControllers.updateUser);

// DELETE
router.delete("/:id", middlewareController.verifyToken, userControllers.deleteUser);

module.exports = router