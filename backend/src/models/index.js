const { connection } = require('../config/conn');

const COLLECTION_NAME = 'customer';

const createModel = async customer =>
  connection().then(async db => {
    await db.collection(COLLECTION_NAME).insertOne(customer);
    return customer;
  });

const readByIdModel = async id => {};

const findUserNameModel = async nomeUsuario => {
  const result = await connection().then(db =>
    db.collection(COLLECTION_NAME).findOne({ nomeUsuario }),
  );
  return result;
};

const updateModel = async customer => {};

const deleteModel = async id => {};

module.exports = {
  createModel,
  readByIdModel,
  findUserNameModel,
  updateModel,
  deleteModel,
};
