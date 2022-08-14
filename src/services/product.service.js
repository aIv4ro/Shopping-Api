import { Product } from '../models/product.model.js';

export const findById = async id => {
  const product = await Product.findById(id);
  return product;
};

export const find = async ({offset = 0, limit = 0} = {}) => {
  const product = await Product.find().sort('name').skip(offset).limit(limit);
  return product;
};

export const create = async product => {
  const newProduct = await Product.create(product);
  return newProduct;
};

export const update = async (id, updatedFields) => {
  const updatedProduct = await Product.findByIdAndUpdate(id, updatedFields, {new: true});
  return updatedProduct;
};

export const remove = async id => {
  const removedProduct = await Product.findByIdAndRemove(id);
  return removedProduct;
};
