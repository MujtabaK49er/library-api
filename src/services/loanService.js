import * as loanRepo from '../repositories/loanRepository.js';

export const createLoan = async ({ userId, bookId }) => {
  if (!userId || !bookId) {
    const err = new Error('userId and bookId required');
    err.status = 400;
    throw err;
  }

  // First, checking if the book exists
  const book = await loanRepo.getBookById(bookId);

  if (!book) {
    const err = new Error('Book not found');
    err.status = 404;
    throw err;
  }

  // then checking the availability
  if (book.availableCopies <= 0) {
    const err = new Error('No copies available');
    err.status = 400;
    throw err;
  }

  // Finally decreasing the copies
  await loanRepo.decreaseBookCopies(bookId);

  // creating loan
  return loanRepo.createLoan({
    userId: Number(userId),
    bookId: Number(bookId),
    loanDate: new Date(),
    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    status: 'BORROWED'
  });
};

export const getAllLoans = async () => {
  return loanRepo.getAllLoans();
};

export const getLoanById = async (id) => {
  const loan = await loanRepo.getLoanById(id);

  if (!loan) {
    const err = new Error('Loan not found');
    err.status = 404;
    throw err;
  }

  return loan;
};

export const returnBook = async (id) => {
  const loan = await getLoanById(id);

  if (loan.status === 'RETURNED') {
    const err = new Error('Book already returned');
    err.status = 400;
    throw err;
  }

  return loanRepo.updateLoan(id, {
    returnDate: new Date(),
    status: 'RETURNED'
  });
};

export const deleteLoan = async (id) => {
  await getLoanById(id);
  return loanRepo.deleteLoan(id);
};