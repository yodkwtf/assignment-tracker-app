import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../errors/index.js';

/**
 * @desc    Register New User
 * @route   POST /api/v1/user/register
 * @access  Public
 */
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError('Please provide all required fields');
  }

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError('Email already in use');
  }

  const user = await User.create({ name, email, password });
  res.status(StatusCodes.CREATED).json({ user });
};

/**
 * @desc    Login User
 * @route   POST /api/v1/user/login
 * @access  Public
 */
const loginUser = async (req, res) => {
  res.send('Login User');
};

/**
 * @desc    Update User
 * @route   PATCH /api/v1/user/update
 * @access  Private
 */
const updateUser = async (req, res) => {
  res.send('Update User');
};

export { registerUser, loginUser, updateUser };
