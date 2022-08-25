import { notifiyOrder } from '../services/notifications.service.js';
import {findById, find, create, update, remove} from '../services/order.service.js';
import { getUserDevices } from '../services/user.service.js';
import { populateOrder } from '../utils/populateOrder.js';

export const getOrderFromId = (req, res) => {
  const {id} = req.params;
  findById(id)
    .then(order => populateOrder(order))
    .then(populatedOrder => res.send(populatedOrder))
    .catch(err => res.status(404).send(err));
}; 

export const getAllOrders = (req, res) => {
  find()
    .then(orders => Promise.all(orders.map(order => populateOrder(order))))
    .then(populatedOrders => res.send(populatedOrders))
    .catch(err => res.status(404).send(err));
};

export const postOrder = async (req, res) => {
  const {order} = req.body;

  create(order)
    .then(newOrder => populateOrder(newOrder))
    .then(order => {
      getUserDevices(order.toUser.id).then(devices => notifiyOrder(order, devices));
      return res.send(order);
    })
    .catch(err => res.status(404).send(err));
};

export const patchOrder = (req, res) => {
  const {updatedFields} = req.body;
  const {id} = req.params;

  update(id, updatedFields)
    .then(updatedOrder => populateOrder(updatedOrder))
    .then(updatedOrderPopulated => res.send(updatedOrderPopulated))
    .catch(err => res.status(404).send(err));
};

export const deleteOrder = (req, res) => {
  const {id} = req.params;

  remove(id)
    .then(order => res.send(order))
    .catch(err => res.status(404).send(err));
};
