import { Order } from '../models/order.model.js';

export const findById = async id => {
  const order = await Order.findById(id);
  return order;
};

export const find = async () => {
  const orders = await Order.find();
  return orders;
};

export const create = async order => {
  const newOrder = await Order.create(order);
  return newOrder;
};

export const update = async (id, updatedFields) => {
  const updatedOrder = await Order.findByIdAndUpdate(id, updatedFields, {new: true});
  return updatedOrder;
};

export const remove = async id => {
  const removedOrder = await Order.findByIdAndRemove(id);
  return removedOrder;
};