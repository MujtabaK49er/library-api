import * as reviewRepo from '../repositories/reviewRepository.js';

export const createReview = async ({ userId, bookId, rating, comment }) => {
  if (!userId || !bookId || !rating || !comment) {
    const err = new Error('userId, bookId, rating, and comment are required');
    err.status = 400;
    throw err;
  }

  if (rating < 1 || rating > 5) {
    const err = new Error('Rating must be between 1 and 5');
    err.status = 400;
    throw err;
  }

  return reviewRepo.createReview({
    userId: Number(userId),
    bookId: Number(bookId),
    rating: Number(rating),
    comment
  });
};

export const getAllReviews = async () => {
  return reviewRepo.getAllReviews();
};

export const getReviewById = async (id) => {
  const review = await reviewRepo.getReviewById(id);

  if (!review) {
    const err = new Error('Review not found');
    err.status = 404;
    throw err;
  }

  return review;
};

export const updateReview = async (id, data) => {
  await getReviewById(id);

  if (data.rating && (data.rating < 1 || data.rating > 5)) {
    const err = new Error('Rating must be between 1 and 5');
    err.status = 400;
    throw err;
  }

  return reviewRepo.updateReview(id, data);
};

export const deleteReview = async (id) => {
  await getReviewById(id);
  return reviewRepo.deleteReview(id);
};