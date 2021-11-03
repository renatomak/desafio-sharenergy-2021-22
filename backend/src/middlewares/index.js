const { readByUserNameService } = require('../services');
const { STATUS_409_CONFLICT } = require('../utils');

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

module.exports = {
  checkUniqueUsername,
};
