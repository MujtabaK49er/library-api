import express from 'express';
import { authenticate, authorizeAdmin } from '../middleware/authMiddleware.js';
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook
} from '../controllers/bookController.js';

const router = express.Router();


router.post('/', authenticate, authorizeAdmin, createBook);
router.put('/:id', authenticate, authorizeAdmin, updateBook);
router.delete('/:id', authenticate, authorizeAdmin, deleteBook);
//router.post('/', authenticate, createBook);
//router.get('/', getAllBooks);
//router.get('/:id', getBookById);
//router.put('/:id', updateBook);
//router.delete('/:id', deleteBook);


router.get('/', getAllBooks);
router.get('/:id', getBookById);

export default router;
