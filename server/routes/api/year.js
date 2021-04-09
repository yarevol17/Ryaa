const router = require("express").Router();
const yearController = require("../../controllers/year")

router.post("/", yearController.createYear);
router.get("/", yearController.getYear)

module.exports = router