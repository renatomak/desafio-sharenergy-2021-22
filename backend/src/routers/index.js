const express = require('express');
const { create } = require('../controllers');
const Middlewares = require('../middlewares');

const router = express.Router();

router.post(
  '/customers',
  [Middlewares.checkUniqueUsername, Middlewares.checkUsernameformat],
  create,
);

module.exports = router;
