import mongoose from "mongoose";
import { emailRegex } from "../utils/regex.js";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    validate: {
      validator: value => emailRegex.test(value),
      message: props => `${props.value} is not a valid email!`
    },
    required: [true, 'Email is required'], 
    unique: [true, 'Email already in use'],
  },
  name: {
    type: String,
    required: true, 
  },
  surname: {
    type: String,
    required: true, 
  },
});

UserSchema.virtual('id').get(function() { return this._id.toString(); });

UserSchema.set('toJSON', {
  virtuals: true,
});

UserSchema.pre('save', function() {

});

export const User = mongoose.model('User', UserSchema);