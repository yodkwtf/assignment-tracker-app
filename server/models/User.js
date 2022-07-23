import mongoose from 'mongoose';
import validator from 'validator';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    minlength: 3,
    maxlength: 50,
    trim: true,
  },

  email: {
    type: String,
    required: [true, 'Please provide an name'],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email',
    },
  },

  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 6,
  },
});

export default mongoose.model('User', UserSchema);
