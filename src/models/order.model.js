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
  orderProducts: {
    type: [
      { 
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true }
      }
    ],
    default: []
  }
});

OrderSchema.virtual('id').get(function() { return this._id.toString(); });

OrderSchema.set('toJSON', {
  virtuals: true,
});

export const Order = mongoose.model('Order', OrderSchema);