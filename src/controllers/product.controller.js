import {findById, find, create, update, remove} from '../services/product.service.js';

export const getProductFromId = (req, res) => {
  const {id} = req.params;
  findById(id)
    .then(product => res.send(product))
    .catch(err => res.status(404).send(err));
}; 

export const getAllProducts = (req, res) => {
  find()
    .then(products => res.send(products))
    .catch(err => res.status(404).send(err));
};

export const postProduct = async (req, res) => {
  const {product} = req.body;

  create(product)
    .then(newProduct => res.send(newProduct))
    .catch(err => res.status(404).send(err));
};

export const patchProduct = (req, res) => {
  const {updatedFields} = req.body;
  const {id} = req.params;

  update(id, updatedFields)
    .then(updatedProduct => res.send(updatedProduct))
    .catch(err => res.status(404).send(err));
};

export const deleteProduct = (req, res) => {
  const {id} = req.params;

  remove(id)
    .then(product => res.send(product))
    .catch(err => res.status(404).send(err));
};
