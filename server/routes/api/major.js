const router = require("express").Router();
const majorController = require("../../controllers/major");

router.post("/", majorController.createMajor);
router.get("/", majorController.getMajor);
router.put("/subject/:majorId", majorController.addSubjectToMajor)
router.get("/subject/:majorId", majorController.getSubjectsByMajor)
router.put("/skill/:majorId", majorController.addSkillToMajor)
router.get("/skill/:majorId", majorController.getSkillsByMajor)

module.exports = router