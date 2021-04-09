const router = require("express").Router();
const classController = require("../../controllers/class");

router.post("/", classController.createClass);
router.get("/:yearId", classController.getClassesByYear);


module.exports = router