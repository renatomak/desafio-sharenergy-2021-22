const {
  createModel,
  readByIdModel,
  findUserNameModel,
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

const readByUserNameService = async userName => {
  try {
    const getResult = await findUserNameModel(userName);
    console.log(getResult);
    return getResult;
  } catch (error) {
    throw Error(messageError(error.message, 'read customer'));
  }
};

const readByIdService = async id => {};

const updateService = async customer => {};

const deleteService = async id => {};

module.exports = {
  createService,
  readByIdService,
  readByUserNameService,
  updateService,
  deleteService,
};
