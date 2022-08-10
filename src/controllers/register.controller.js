import { create, findAllEmails } from '../services/user.service.js';

export const getAllEmails = (req, res) => {
  findAllEmails()
    .then(emails => res.send(emails))
    .catch(err => res.status(404).send(err));
};


export const register = async (req, res) => {
  const {email, hashedPassword, name, surname} = req.body;
  create({email, hashedPassword, name, surname})
    .then(user => res.send(user))
    .catch(err => res.status(409).send({message: err.message}));
};