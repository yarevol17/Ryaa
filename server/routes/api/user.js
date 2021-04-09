const router = require('express').Router();
const userController = require("../../controllers/user");
router.get("/user", userController.createUser)
module.exports = router;
