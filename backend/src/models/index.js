const { connection } = require('../config/conn');

const COLLECTION_NAME = 'customer';

const createModel = async customer =>
  connection().then(async db => {
    await db.collection(COLLECTION_NAME).insertOne(customer);
    return customer;
  });

const readByNumberCustomer = async numeroCliente => {
  const result = await connection().then(db =>
    db.collection(COLLECTION_NAME).findOne({ numeroCliente }),
  );
  return result;
};

const findUserNameModel = async nomeUsuario => {
  const result = await connection().then(db =>
    db.collection(COLLECTION_NAME).findOne({ nomeUsuario }),
  );
  return result;
};

const findAllCustomersModel = async _ => {
  const result = await connection().then(db =>
    db.collection(COLLECTION_NAME).find({}).toArray(),
  );

  return result;
};

const updateModel = async customer => {
  console.log('aqui');
  await connection().then(db => {
    db.collection(COLLECTION_NAME).updateOne({ _id: customer._id }, [
      { $set: customer },
    ]);
  });
  return customer;
};

const deleteModel = async id => {};

module.exports = {
  createModel,
  readByNumberCustomer,
  findUserNameModel,
  updateModel,
  deleteModel,
  findAllCustomersModel,
};
