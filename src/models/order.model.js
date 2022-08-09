import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  fromUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'From user is required']
  },
  toUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'To user is required']
  },
  productsQuantities: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    quantity: {
      type: Number,
    }
  }]
});

OrderSchema.virtual('id').get(function() { return this._id.toString(); });

OrderSchema.set('toJSON', {
  virtuals: true,
});

export const Order = mongoose.model('Order', OrderSchema);