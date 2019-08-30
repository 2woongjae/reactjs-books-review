import { startReceiveBooks, receiveBooks, errorReceiveBooks } from './books';

describe('books', () => {
  describe('actions', () => {
    it('startReceiveBooks() should create action', () => {
      expect(startReceiveBooks()).toEqual({ type: 'START_RECEIVE_BOOKS' });
    });
    it('receiveBooks(books) should create action', () => {
      const books = {};
      expect(receiveBooks(books)).toEqual({ type: 'RECEIVE_BOOKS', books });
    });
    it('errorReceiveBooks() should create action', () => {
      expect(errorReceiveBooks()).toEqual({ type: 'ERROR_RECEIVE_BOOKS' });
    });
  });
});
