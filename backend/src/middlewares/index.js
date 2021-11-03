const { readByNumberCustomer } = require('../models');
const { readByUserNameService } = require('../services');
const { STATUS_409_CONFLICT, STATUS_400_BAD_REQUEST } = require('../utils');

const checkUniqueUsername = async (req, res, next) => {
  const { nomeUsuario } = req.body;

  const result = await readByUserNameService(nomeUsuario);

  if (result) {
    return res
      .status(STATUS_409_CONFLICT)
      .json({ message: 'Customer already registered!' });
  }

  next();
};

const checkUniqueNumberCustomer = async (req, res, next) => {
  const { numeroCliente } = req.body;

  const result = await readByNumberCustomer(numeroCliente);

  if (result) {
    return res
      .status(STATUS_409_CONFLICT)
      .json({ message: 'Customer already registered!' });
  }

  next();
};

const checkUsernameformat = (req, res, next) => {
  const { nomeUsuario } = req.body;

  const RegExp = /^[\w\.\_\-]+$/;

  if (!RegExp.test(nomeUsuario)) {
    return res
      .status(STATUS_400_BAD_REQUEST)
      .send({ message: 'the username can then have letters, ".", "_", "-"' });
  }

  next();
};

const checkPasswordExists = (req, res, next) => {
  const { password } = req.body;

  if (!password || password === '') {
    return res
      .status(STATUS_400_BAD_REQUEST)
      .send({ message: 'The "password" field is required' });
  }

  next();
};

const checkUserNameExists = (req, res, next) => {
  const { nomeUsuario } = req.body;
  if (!nomeUsuario || nomeUsuario === '') {
    return res
      .status(STATUS_400_BAD_REQUEST)
      .send({ message: 'The "nomeUsuario" field is mandatory' });
  }
  next();
};

module.exports = {
  checkUniqueUsername,
  checkUsernameformat,
  checkPasswordExists,
  checkUserNameExists,
  checkUniqueNumberCustomer,
};
