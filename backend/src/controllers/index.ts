const rescue = require('express-rescue');
const { createService, readByIdService, updateService, deleteService } = require('../services');
const {
  STATUS_400_BAD_REQUEST,
  STATUS_201_CREATED,
  STATUS_409_CONFLICT,
} = require('../utils');

const create = rescue(async (req, res) => {
  try {
    const { body: customer } = req;

    const createResult = await createService(customer);

    if (createResult.registered) {
      console.error(error.message);
      return res
        .status(STATUS_409_CONFLICT)
        .json({ message: 'Customer already registered!' });
    }

    return res.status(STATUS_201_CREATED).json(createResult);
  } catch (error) {
    console.error(error.message);
    return res
      .status(STATUS_400_BAD_REQUEST)
      .json({ message: 'Invalid fields'});
  }
});

const read = rescue(async (req, res) => {});

const update = rescue(async (req, res) => {
});

const deleteUser = rescue(async (req, res) => {})

module.exports = {
  create,
  read,
  update,
  deleteUser,
};
