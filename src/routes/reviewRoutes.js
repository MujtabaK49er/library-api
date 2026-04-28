import express from 'express';
import { authenticate } from '../middleware/authMiddleware.js';
import {
  createReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview
} from '../controllers/reviewController.js';

const router = express.Router();

// All review endpoints require authentication
router.post('/', authenticate, createReview);
router.get('/', authenticate, getAllReviews);
router.get('/:id', authenticate, getReviewById);
router.put('/:id', authenticate, updateReview);
router.delete('/:id', authenticate, deleteReview);

export default router;
