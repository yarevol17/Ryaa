const router = require('express').Router();
router.use('/api/user', require('./api/user'));
router.use('/api/year', require('./api/year'));
router.use('/api/class', require('./api/class'));
router.use('/api/major', require('./api/major'));
router.use('/api/subject', require('./api/subject'));
router.use('/api/skill', require('./api/skill'));
router.use('/api/lab', require('./api/lab'));
router.use('/api/rate', require('./api/rate'));
// router.use('/api/subject', require('./api/subject'));


module.exports = router;