const router = require("express").Router();
const skillController = require("../../controllers/skill");

router.post("/", skillController.createSkill);

module.exports = router