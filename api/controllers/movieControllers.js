const Movie = require("../models/Movie")

const movieControllers = {
    // CREATE
    createMovie: async (req, res) => {
        if (req.user.isAdmin) {
            const newMovie = new Movie(req.body);
            try {
                const savedMovie = await newMovie.save();
                res.status(200).json(savedMovie)
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(403).json("You're not allowed!")
        }
    },

    // UPDATE
    updateMovie: async (req, res) => {
        if (req.user.isAdmin) {
            try {
                const updateMovie = await Movie.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                },
                    { new: true },
                );
                res.status(200).json(updateMovie)
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(403).json("You're not allowed!")
        }
    },

    // DELETE
    deleteMovie: async (req, res) => {
        if (req.user.isAdmin) {
            try {
                await Movie.findByIdAndDelete(req.params.id);
                res.status(200).json('Delete movie successfully!')
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(403).json("You're not allowed!")
        }
    },

    // GET
    getMovie: async (req, res) => {
        try {
            const movies = await Movie.findById(req.params.id);
            res.status(200).json(movies)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // GET ALL MOVIE
    getAllMovie: async (req, res) => {
        if (req.user.isAdmin) {
            try {
                const movie = await Movie.find();
                res.status(200).json(movie.reverse())
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(403).json("You're not allowed!")
        }
    },

    // GET RANDOM
    getRandomMovie: async (req, res) => {
        const type = req.query.type;
        let movie;
        try {
            if (type === "series") {
                movie = await Movie.aggregate([
                    { $match: { isSeries: true } },
                    { $sample: { size: 1 } },
                ])
            } else {
                movie = await Movie.aggregate([
                    { $match: { isSeries: false } },
                    { $sample: { size: 1 } },
                ])
            }
            res.status(200).json(movie)
        } catch (err) {
            res.status(500).json(err)
        }
    },
}

module.exports = movieControllers;