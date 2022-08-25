import {findById, find, create, update, remove} from '../services/user.service.js';

export const getUserFromToken = (req, res) => {
  const id = req.userId;

  findById(id)
    .then(user => res.send(user))
    .catch(err => res.status(404).send(err));
};

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

export const postUser = async (req, res) => {
  const {user} = req.body;

  create(user)
    .then(newUser => res.send(newUser))
    .catch(err => res.status(404).send(err));
};

export const patchUser = (req, res) => {
  const {updatedFields} = req.body;
  const {id} = req.params;

  update(id, updatedFields)
    .then(updatedUser => res.send(updatedUser))
    .catch(err => res.status(404).send(err));
};

export const deleteUser = (req, res) => {
  const {id} = req.params;

  remove(id)
    .then(user => res.send(user))
    .catch(err => res.status(404).send(err));
};
