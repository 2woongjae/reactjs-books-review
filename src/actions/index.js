export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const DELETE_BOOK = 'DELETE_BOOK';
export const UNDO_DELETE_BOOK = 'UNDO_DELETE_BOOK';

export function receiveBooks(books) {
  return {
    type: RECEIVE_BOOKS,
    books,
  };
}

export function deleteBook(bookId) {
  return {
    type: DELETE_BOOK,
    bookId,
  };
}

export function undoDeleteBook(bookId) {
  return {
    type: UNDO_DELETE_BOOK,
    bookId,
  };
}
