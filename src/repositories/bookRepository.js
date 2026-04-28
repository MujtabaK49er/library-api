import prisma from '../utils/prismaClient.js';

export const createBook = (data) => {
  return prisma.book.create({ data });
};

export const getAllBooks = () => {
  return prisma.book.findMany();
};

export const getBookById = (id) => {
  return prisma.book.findUnique({
    where: { id: Number(id) },
  });
};

export const updateBook = (id, data) => {
  return prisma.book.update({
    where: { id: Number(id) },
    data,
  });
};

export const deleteBook = (id) => {
  return prisma.book.delete({
    where: { id: Number(id) },
  });
};