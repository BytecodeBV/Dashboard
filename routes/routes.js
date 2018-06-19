const router = require('express').Router();

const HomeController = require('../controllers/HomeController');
const AdminController = require('../controllers/AdminController');

router.get('/', HomeController.show);
router.get('/admin/:username', AdminController.show);

module.exports = router;
