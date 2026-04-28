import prisma from '../utils/prismaClient.js';

export const createReview = (data) => {
  return prisma.review.create({ data });
};

export const getAllReviews = () => {
  return prisma.review.findMany({
    include: { user: true, book: true }
  });
};

export const getReviewById = (id) => {
  return prisma.review.findUnique({
    where: { id: Number(id) },
    include: { user: true, book: true }
  });
};

export const updateReview = (id, data) => {
  return prisma.review.update({
    where: { id: Number(id) },
    data
  });
};

export const deleteReview = (id) => {
  return prisma.review.delete({
    where: { id: Number(id) }
  });
};