import prisma from '../utils/prismaClient.js';

export const createLoan = (data) => {
  return prisma.loan.create({ data });
};

export const getAllLoans = () => {
  return prisma.loan.findMany({
    include: {
      user: true,
      book: true
    }
  });
};

export const getLoanById = (id) => {
  return prisma.loan.findUnique({
    where: { id: Number(id) },
    include: {
      user: true,
      book: true
    }
  });
};

export const updateLoan = (id, data) => {
  return prisma.loan.update({
    where: { id: Number(id) },
    data
  });
};

export const deleteLoan = (id) => {
  return prisma.loan.delete({
    where: { id: Number(id) }
  });
};

export const getBookById = (id) => {
  return prisma.book.findUnique({
    where: { id: Number(id) }
  });
};

export const decreaseBookCopies = (bookId) => {
  return prisma.book.update({
    where: { id: Number(bookId) },
    data: {
      availableCopies: {
        decrement: 1
      }
    }
  });
};