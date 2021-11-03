const {
  createModel,
  readByNumberCustomer,
  findUserNameModel,
  updateModel,
  deleteModel,
  findAllCustomersModel,
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

    return getResult;
  } catch (error) {
    throw Error(messageError(error.message, 'read customer'));
  }
};

const readAllCustomersService = async _ => {
  try {
    const getAllResult = await findAllCustomersModel();

    return getAllResult;
  } catch (error) {
    throw Error(messageError(error.message, 'read customers'));
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
    return result;
  } catch (error) {
    throw Error(messageError(error.message, 'updating customer'));
  }
};

const deleteService = async id => {
  try {
    await deleteModel(id);

    return true;
  } catch (error) {
    throw Error(messageError(error.message, 'delete to user'));
  }
};

module.exports = {
  createService,
  readByIdService,
  readByUserNameService,
  updateService,
  deleteService,
  readAllCustomersService,
};
