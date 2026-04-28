import express from 'express';
import { authenticate } from '../middleware/authMiddleware.js';
import {
  createLoan,
  getAllLoans,
  getLoanById,
  returnBook,
  deleteLoan
} from '../controllers/loanController.js';

const router = express.Router();

router.post('/', authenticate, createLoan);

router.post('/', createLoan);


router.get('/', getAllLoans);

router.get('/:id', getLoanById);

router.put('/:id/return', returnBook);




router.delete('/:id', deleteLoan);

export default router;