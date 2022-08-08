import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: String,
  name: String,
  surname: String,
});

UserSchema.virtual('id').get(function() {
  return this._id.toString();
});

UserSchema.set('toJSON', {
  virtuals: true,
});

export const User = mongoose.model('User', UserSchema);