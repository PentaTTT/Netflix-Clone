const movieControllers = require('../controllers/movieControllers');
const middlewareController = require('../controllers/middlewareControllers')
const router = require('express').Router();

// CREATE
router.post("/", middlewareController.verifyToken, movieControllers.createMovie);

// UPDATE
router.put("/:id", middlewareController.verifyToken, movieControllers.updateMovie);

// DELETE
router.delete("/:id", middlewareController.verifyToken, movieControllers.deleteMovie);

// GET ALL MOVIE
router.get("/", middlewareController.verifyToken, movieControllers.getAllMovie);

// FIND MOVIE
router.get("/find/:id", middlewareController.verifyToken, movieControllers.getMovie);

// GET RANDOM
router.get("/random", middlewareController.verifyToken, movieControllers.getRandomMovie);


module.exports = router