import bcrypt from 'bcrypt';
import { findUserByEmail } from '../services/user.service.js';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
  const {email, password} = req.body;

  const user = await findUserByEmail(email);

  const isPasswordCorrect = user && await bcrypt.compare(password, user.hashedPassword);

  if(!isPasswordCorrect) {
    return res.status(401).send({error: 'invalid user or password'});
  }

  const token = jwt.sign({'id': user.id}, process.env.SECRET_TOKEN);

  res.send({token});
};