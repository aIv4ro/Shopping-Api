import { User } from '../models/user.model.js';

export const findById = async id => {
  const user = await User.findById(id, '-hashedPassword');
  return user;
};

export const find = async () => {
  const users = await User.find({}, '-hashedPassword');
  return users;
};

export const create = async user => {
  const newUser = await User.create(user);
  return newUser;
};

export const update = async (id, updatedFields) => {
  const updatedUser = await User.findByIdAndUpdate(id, updatedFields, {new: true});
  return updatedUser;
};

export const remove = async id => {
  const removedUser = await User.findByIdAndRemove(id);
  return removedUser;
};

export const findUserByEmail = async email => {
  const user = await User.findOne({'email': {$eq: email}});
  return user;
};

export const findAllEmails = async () => {
  const users = await find();
  return users.map(user => user.email);
};

export const getUserDevices = async id => {
  const {devices} = await findById(id);
  return devices;
};
