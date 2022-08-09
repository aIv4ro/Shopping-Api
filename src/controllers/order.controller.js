import {findById, find, create, update, remove} from '../services/order.service.js';

export const getOrderFromId = (req, res) => {
  const {id} = req.params;
  findById(id)
    .then(order => res.send(order))
    .catch(err => res.status(404).send(err));
}; 

export const getAllOrders = (req, res) => {
  find()
    .then(orders => res.send(orders))
    .catch(err => res.status(404).send(err));
};

export const postOrder = async (req, res) => {
  const {order} = req.body;

  create(order)
    .then(newOrder => res.send(newOrder))
    .catch(err => res.status(404).send(err));
};

export const patchOrder = (req, res) => {
  const {updatedFields} = req.body;
  const {id} = req.params;

  update(id, updatedFields)
    .then(updatedOrder => res.send(updatedOrder))
    .catch(err => res.status(404).send(err));
};

export const deleteOrder = (req, res) => {
  const {id} = req.params;

  remove(id)
    .then(order => res.send(order))
    .catch(err => res.status(404).send(err));
};
