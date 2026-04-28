import * as authRepo from '../repositories/authRepository.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signup = async ({ name, email, password }) => {
  if (!name || !email || !password) {
    const err = new Error('Name, email, and password required');
    err.status = 400;
    throw err;
  }

  const existingUser = await authRepo.findByEmail(email);
  if (existingUser) {
    const err = new Error('User already exists');
    err.status = 400;
    throw err;
  }

  const passwordHash = await bcrypt.hash(password, 10);

  return authRepo.createUser({
  name,
  email,
  passwordHash,
  role: email.includes('admin') ? 'ADMIN' : 'USER'
});
};

export const login = async ({ email, password }) => {
  if (!email || !password) {
    const err = new Error('Email and password required');
    err.status = 400;
    throw err;
  }

  const user = await authRepo.findByEmail(email);

  if (!user) {
    const err = new Error('Invalid credentials');
    err.status = 401;
    throw err;
  }

  const isValidPassword = await bcrypt.compare(password, user.passwordHash);

  if (!isValidPassword) {
    const err = new Error('Invalid credentials');
    err.status = 401;
    throw err;
  }

  const accessToken = jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || '1h'
    }
  );

  return { accessToken };
};