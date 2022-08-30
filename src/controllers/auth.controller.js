import bcrypt from 'bcrypt';
import { findUserByEmail, findById } from '../services/user.service.js';
import { create, findAllEmails } from '../services/user.service.js';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
  const {email, password} = req.body;

  const user = await findUserByEmail(email);

  const isPasswordCorrect = user && await bcrypt.compare(password, user.hashedPassword);

  if(!isPasswordCorrect) {
    return res.status(401).send({error: 'invalid user or password'});
  }

  const {device} = req.body;

  if(device && !user.devices.includes(device)) {
    user.devices.push(device);
    user.save();
  }
  const token = jwt.sign({'id': user.id}, process.env.SECRET_TOKEN);

  res.send({token});
};

export const logout = async (req, res) => {
  const {device} = req.body;
  const user = await findById(req.userId);

  if(device) {
    const deviceIndex = user.devices.indexOf(device);
    
    if(deviceIndex != -1) {
      user.devices.splice(deviceIndex, 1);
      user.save();
    }
  }

  res.send({message: 'Logged out'});
};

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
