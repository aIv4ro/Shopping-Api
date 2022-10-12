import mongoose from 'mongoose';
import { capitalize } from '../utils/capitalize.js';

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product is required']
  },
  description: { type: String },
  unit: {
    type: String,
    default: 'u'
  },
  increment: {
    type: Number,
    default: 1.0
  },
  image: {
    type: String
  }
});

ProductSchema.virtual('id').get(function() { return this._id.toString(); });

ProductSchema.set('toJSON', {
  virtuals: true,
});

ProductSchema.pre('save', function(next) {
  this.name = capitalize(this.name);
  next();
});

export const Product = mongoose.model('Product', ProductSchema);
