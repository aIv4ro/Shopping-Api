import { Product } from '../models/product.model.js';

export const findById = async id => {
  const product = await Product.findById(id);
  return product;
};

export const find = async () => {
  const product = await Product.find();
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
