const {
  findUserNameModel,
  createModel,
  readByIdModel,
  updateModel,
  deleteModel,
} = require('../models');

const { messageError } = require('../utils');

const createService = async customer => {
  try {
    const createResult = await createModel(customer);
    return createResult;
  } catch (error) {
    throw Error(messageError(error.message, 'register customer'));
  }
};

const readByIdService = async id => {};

const updateService = async customer => {};

const deleteService = async id => {};

module.exports = {
  createService,
  readByIdService,
  updateService,
  deleteService,
};
