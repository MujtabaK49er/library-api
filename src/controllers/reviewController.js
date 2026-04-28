import * as reviewService from '../services/reviewService.js';

export const createReview = async (req, res, next) => {
  try {
    const review = await reviewService.createReview(req.body);
    res.status(201).json(review);
  } catch (error) {
    next(error);
  }
};

export const getAllReviews = async (req, res, next) => {
  try {
    const reviews = await reviewService.getAllReviews();
    res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
};

export const getReviewById = async (req, res, next) => {
  try {
    const review = await reviewService.getReviewById(req.params.id);
    res.status(200).json(review);
  } catch (error) {
    next(error);
  }
};

export const updateReview = async (req, res, next) => {
  try {
    const review = await reviewService.updateReview(req.params.id, req.body);
    res.status(200).json(review);
  } catch (error) {
    next(error);
  }
};

export const deleteReview = async (req, res, next) => {
  try {
    const review = await reviewService.deleteReview(req.params.id);
    res.status(200).json(review);
  } catch (error) {
    next(error);
  }
};