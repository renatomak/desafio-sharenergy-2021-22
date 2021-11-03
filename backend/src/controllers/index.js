const rescue = require('express-rescue');
const {
  createService,
  readByIdService,
  updateService,
  deleteService,
} = require('../services');
const {
  STATUS_400_BAD_REQUEST,
  STATUS_201_CREATED,
  STATUS_409_CONFLICT,
  STATUS_422_UNPROCESSABLE_ENTITY,
  STATUS_200_OK,
} = require('../utils');

const create = rescue(async (req, res) => {
  try {
    const { body: customer } = req;

    const createResult = await createService(customer);

    return res.status(STATUS_201_CREATED).json(createResult);
  } catch (error) {
    console.error(error.message);
    return res
      .status(STATUS_400_BAD_REQUEST)
      .json({ message: 'Invalid fields' });
  }
});

const read = rescue(async (req, res) => {});

const update = rescue(async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params;
    const customer = { ...body, _id: id };

    const result = await updateService(customer);
    console.log('RESULT: ', result);

    if (result?.registered) {
      return res
        .status(STATUS_409_CONFLICT)
        .json({ message: 'Customer already registered!' });
    }

    return res.status(STATUS_200_OK).json(result);
  } catch (error) {
    console.error(error.message);
    return res
      .status(STATUS_422_UNPROCESSABLE_ENTITY)
      .json({ message: 'Error while updating' });
  }
});

const deleteUser = rescue(async (req, res) => {});

module.exports = {
  create,
  read,
  update,
  deleteUser,
};
