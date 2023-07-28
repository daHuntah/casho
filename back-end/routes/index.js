var express = require('express');
var router = express.Router();
var cusController = require('../controllers/users.controller');

router.get('/', cusController.addCustomer);
router.post('/', cusController.addCustomer);

module.exports = router;
