import * as loanService from '../services/loanService.js';

export const createLoan = async (req, res, next) => {
  try {
    const loan = await loanService.createLoan(req.body);
    res.status(201).json(loan);
  } catch (error) {
    next(error);
  }
};

export const getAllLoans = async (req, res, next) => {
  try {
    const loans = await loanService.getAllLoans();
    res.status(200).json(loans);
  } catch (error) {
    next(error);
  }
};

export const getLoanById = async (req, res, next) => {
  try {
    const loan = await loanService.getLoanById(req.params.id);
    res.status(200).json(loan);
  } catch (error) {
    next(error);
  }
};

export const returnBook = async (req, res, next) => {
  try {
    const loan = await loanService.returnBook(req.params.id);
    res.status(200).json(loan);
  } catch (error) {
    next(error);
  }
};

export const deleteLoan = async (req, res, next) => {
  try {
    const loan = await loanService.deleteLoan(req.params.id);
    res.status(200).json(loan);
  } catch (error) {
    next(error);
  }
};