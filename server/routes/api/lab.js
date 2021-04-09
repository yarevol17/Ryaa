const router = require("express").Router();
const labController = require("../../controllers/lab")

router.post("/", labController.createLab);
router.get("/", labController.getLabs);

module.exports = router