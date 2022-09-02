import mongoose from 'mongoose';

mongoose.connect(
  process.env.MONGO_CONNECTION,
);

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', err => {
  console.error(`MongoDB connection error: ${err}`);
});
