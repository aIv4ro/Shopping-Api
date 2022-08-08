import bcrypt from 'bcrypt';

export const encryptPassword = async password => bcrypt.hash(password, 10);