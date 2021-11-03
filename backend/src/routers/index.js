const express = require('express');
const { create } = require('../controllers');
const Middlewares = require('../middlewares');

const router = express.Router();

router.post('/customers', Middlewares.checkUniqueUsername, create);

module.exports = router;
