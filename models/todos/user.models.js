import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
      min: ['3', 'Password must be greater than 3 character'],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
