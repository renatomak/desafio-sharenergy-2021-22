const { ObjectId } = require('bson');
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
  const { _id, numeroCliente, nomeCliente, nomeUsuario, password, usinas } =
    customer;
  const result = await connection().then(db => {
    db.collection(COLLECTION_NAME).updateOne({ _id: ObjectId(_id) }, [
      { $set: { numeroCliente, nomeCliente, nomeUsuario, password, usinas } },
    ]);
  });
  console.log('resulte em model: ', result);
  return customer;
};

const deleteModel = async id => {
  await connection().then(db =>
    db.collection(COLLECTION_NAME).deleteOne({ _id: ObjectID(id) }),
  );
};

module.exports = {
  createModel,
  readByNumberCustomer,
  findUserNameModel,
  updateModel,
  deleteModel,
  findAllCustomersModel,
};
