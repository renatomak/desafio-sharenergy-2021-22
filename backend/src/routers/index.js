const express = require('express');
const { create, update, read } = require('../controllers');
const Middlewares = require('../middlewares');

const router = express.Router();

router.post(
  '/customers',
  [
    Middlewares.checkUserNameExists,
    Middlewares.checkPasswordExists,
    Middlewares.checkUniqueNumberCustomer,
    Middlewares.checkUniqueUsername,
    Middlewares.checkUsernameformat,
  ],
  create,
);

router.put(
  '/customers/:id',
  [Middlewares.checkUniqueUsername, Middlewares.checkUsernameformat],
  update,
);

router.get('/customers', read);

module.exports = router;
