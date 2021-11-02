const { connection } = require('../config/conn');

const COLLECTION_NAME = 'customer';

const createModel = async customer =>
  connection().then(async db => {
    await db.collection(COLLECTION_NAME).insertOne(customer);
    return customer;
  });

const readByIdModel = async id => {};

const findUserNameModel = async userName => {};

const updateModel = async customer => {};

const deleteModel = async id => {};

module.exports = {
  createModel,
  readByIdModel,
  findUserNameModel,
  updateModel,
  deleteModel,
};
