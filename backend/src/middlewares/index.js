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

module.exports = {
  checkUniqueUsername,
  checkUsernameformat,
  checkPasswordExists,
};
