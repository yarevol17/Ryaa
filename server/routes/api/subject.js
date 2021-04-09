const router = require("express").Router();
const subjectController = require("../../controllers/subject");

router.post("/", subjectController.createSubject);
// router.get("/:majorId", subjectController.getSubjectesByMajor);


module.exports = router