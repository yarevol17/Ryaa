const router = require('express').Router();
const userController = require("../../controllers/user");

router.post("/", userController.createUser);
router.put("/id/:email", userController.updateUser)
// router.put("/id/:email", userController.updateUser)
router.get("/", userController.getUser)
router.get("/id/", userController.getUserbyEmail)

module.exports = router;
