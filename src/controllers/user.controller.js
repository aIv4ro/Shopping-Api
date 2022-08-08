import {findById, find, create, update, remove} from '../services/user.service.js';

export const getUserFromId = (req, res) => {
  const {id} = req.params;
  findById(id)
    .then(user => res.send(user))
    .catch(err => res.status(404).send(err));
}; 

export const getAllUsers = (req, res) => {
  find()
    .then(users => res.send(users))
    .catch(err => res.status(404).send(err));
};

export const postUser = (req, res) => {
  const {user} = req.body;
  create(user)
    .then(user => res.send(user))
    .catch(err => res.status(404).send(err));
};

export const updateUser = (req, res) => {
  const {user} = req.body;
  update(user)
    .then(user => res.send(user))
    .catch(err => res.status(404).send(err));
}

export const deleteUser = (req, res) => {
  const {id} = req.params;
  remove(id)
    .then(user => res.send(user))
    .catch(err => res.status(404).send(err));
}
