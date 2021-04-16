const router = require("express").Router();
const rateController = require("../../controllers/rate");

router.post("/:author_id", rateController.rate);
router.get("/:user_id", rateController.getRateByUser);

module.exports = router