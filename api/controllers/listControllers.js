const List = require("../models/List")

const listControllers = {
    // CREATE LIST MOVIE
    createList: async (req, res) => {
        if (req.user.isAdmin) {
            const newList = new List(req.body)
            try {
                const saveList = await newList.save();
                res.status(200).json(saveList);

            } catch (err) {
                return res.status(500).json(err)
            }
        } else {
            return res.status(403).json("You're not allowed!")
        }
    },

    // UPDATE
    updateList: async (req, res) => {
        if (req.user.isAdmin) {
            try {
                const updateList = await List.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                },
                    { new: true }
                );
                res.status(200).json(updateList)

            } catch (err) {
                return res.status(500).json(err)
            }
        } else {
            return res.status(403).json("You're not allowed!")
        }
    },

    // DELETE
    deleteList: async (req, res) => {
        if (req.user.isAdmin) {
            try {
                await List.findByIdAndDelete(req.params.id)
                res.status(200).json("Delete list movie successfully!")
            } catch (err) {
                return res.status(500).json(err)
            }
        } else {
            return res.status(403).json("You're not allowed!")
        }
    },

    // GET ALL
    getAllList: async (req, res) => {
        const typeQuery = req.query.type;
        const genreQuery = req.query.genre;
        let list = []
        if (req.user.isAdmin) {
            try {
                if (typeQuery) {
                    if (genreQuery) {
                        list = await List.aggregate([
                            { $sample: { size: 10 } },
                            { $match: { type: typeQuery, genre: genreQuery } }
                        ])
                    } else {
                        list = await List.aggregate([
                            { $sample: { size: 10 } },
                            { $match: { type: typeQuery } }
                        ])
                    }
                } else {
                    list = await List.aggregate([{
                        $sample: { size: 10 }
                    }])
                }

                res.status(200).json(list);

            } catch (err) {
                return res.status(500).json(err)
            }
        } else {
            return res.status(403).json("You're not allowed!")
        }
    },

    // GET FIND
    getList: async (req, res) => {
        try {
            const listMovie = await List.findById(req.params.id)
            res.status(200).json(listMovie)
        } catch (err) {
            return res.status(500).json(err)
        }
    },
}

module.exports = listControllers;