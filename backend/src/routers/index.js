const express = require('express');
const { create } = require('../controllers');

const router = express.Router();

router.post('/customers', create);

module.exports = router;
