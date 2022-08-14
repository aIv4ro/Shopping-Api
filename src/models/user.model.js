import mongoose from 'mongoose';
import { capitalize } from '../utils/capitalize.js';
import { emailRegex } from '../utils/regex.js';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'], 
    unique: [true, 'Email already in use'],
    validate: {
      validator: value => emailRegex.test(value),
      message: props => `${props.value} is not a valid email!`
    },
  },
  name: {
    type: String,
    required: true, 
  },
  surname: {
    type: String,
    required: true, 
  },
  hashedPassword: {
    type: String,
    required: [true, 'Password is required'],
  },
  devices: [String]
});

UserSchema.virtual('id').get(function() { return this._id.toString(); });

UserSchema.set('toJSON', {
  virtuals: true,
});

UserSchema.pre('save', function(next) {
  this.name = capitalize(this.name);
  this.surname = capitalize(this.surname);
  next();
});

export const User = mongoose.model('User', UserSchema);