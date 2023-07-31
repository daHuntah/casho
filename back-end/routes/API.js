var express = require('express');
var router = express.Router();
var apiController = require('../controllers/API/CusAPI.controller');

router.post('/list', apiController.listCustomers);

router.post('/reg', apiController.addCustomer);

module.exports = router;