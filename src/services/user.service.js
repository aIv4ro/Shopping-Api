import { User } from "../models/user.model.js";

export const findById = async (id) => {
  const res = await User.findById(id);
  return res;
}

export const find = async () => {
  const res = await User.find();
  return res;
}

export const create = async user => {
  const res = await User.create(user);
  return res;
}

export const update = async (id, updatedFields) => {
  const res = await User.findByIdAndUpdate(id, updatedFields, {new: true});
  return res;
}

export const remove = async id => {
  const res = await User.findByIdAndRemove(id);
  return res;
}