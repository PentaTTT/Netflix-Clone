const listControllers = require("../controllers/listControllers");
const middlewareControllers = require("../controllers/middlewareControllers");

const router = require("express").Router();

// CREATE
router.post("/", middlewareControllers.verifyToken, listControllers.createList);

// UPDATE
router.put("/:id", middlewareControllers.verifyToken, listControllers.updateList);

// DELETE
router.delete("/:id", middlewareControllers.verifyToken, listControllers.deleteList);

// GET ALL
router.get("/", middlewareControllers.verifyToken, listControllers.getAllList);
// GET by id
router.get("/:id", listControllers.getList);

module.exports = router