import * as bookRepo from '../repositories/bookRepository.js';

export const createBook = async (data) => {
  if (!data.title || !data.author || !data.genre || !data.isbn || !data.publishedYear || data.availableCopies === undefined) {
    const err = new Error('Missing required book fields');
    err.status = 400;
    throw err;
  }

  return bookRepo.createBook(data);
};

export const getAllBooks = async () => {
  return bookRepo.getAllBooks();
};

export const getBookById = async (id) => {
  const book = await bookRepo.getBookById(id);

  if (!book) {
    const err = new Error('Book not found');
    err.status = 404;
    throw err;
  }

  return book;
};

export const updateBook = async (id, data) => {
  await getBookById(id);
  return bookRepo.updateBook(id, data);
};

export const deleteBook = async (id) => {
  await getBookById(id);
  return bookRepo.deleteBook(id);
};