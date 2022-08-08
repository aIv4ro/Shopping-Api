import bcrypt from 'bcrypt';
import { findUserByEmail } from '../services/user.service.js';

export const login = async (req, res) => {
  const {email, password} = req.body;

  const user = await findUserByEmail(email);

  const isPasswordCorrect = user && await bcrypt.compare(password, user.hashedPassword);

  if(!isPasswordCorrect) {
    return res.status(401).send({error: 'invalid user or password'});
  }

  res.send(user);
};