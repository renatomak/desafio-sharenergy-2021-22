const {
  createModel,
  readByNumberCustomer,
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

const updateService = async customer => {
  try {
    const { nomeCliente } = customer;

    if (nomeCliente) {
      const registered = await findUserNameModel(nomeCliente);
      console.log(registered);
      if (registered?.customer && customer?._id != registered.customer?._id) {
        return { registered: true };
      }
    }

    const result = await updateModel(customer);
    console.log('RESULT SERVICE: ', result);
    return result;
  } catch (error) {
    throw Error(messageError(error.message, 'updating customer'));
  }
};

const deleteService = async id => {};

module.exports = {
  createService,
  readByIdService,
  readByUserNameService,
  updateService,
  deleteService,
};
