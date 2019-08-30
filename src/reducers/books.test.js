import books from './books';
import { receiveBooks } from '../actions/books';

describe('books', () => {
  describe('reducer', () => {
    let state = null;

    beforeEach(() => {
      state = books(undefined, {});
    });

    afterEach(() => {
      state = null;
    });

    it('should return the initialState', () => {
      expect(state).toEqual([]);
    });

    it('receiveBooks(books) 를 통해 state 를 변경할 수 있다.', () => {
      const expected = [
        {
          bookId: 1,
          ownerId: '7d26db27-168c-4c6a-bd9a-9e20677b60b8',
          title: '모던 자바스크립트 입문',
          message: '모던하군요',
          author: '서재원',
          url:
            'http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791160504439&orderClick=LET&Kc=',
          createdAt: '2019-05-15T07:18:14.000Z',
          updatedAt: '2019-06-07T22:56:50.000Z',
          deletedAt: null,
        },
        {
          bookId: 2,
          ownerId: '7d26db27-168c-4c6a-bd9a-9e20677b60b8',
          title: '책 Mock',
          message: '메세지 Mock',
          author: '저자 Mock',
          url: 'url Mock',
          createdAt: '2019-05-15T07:18:14.000Z',
          updatedAt: '2019-06-07T22:56:50.000Z',
          deletedAt: null,
        },
      ];
      state = books(state, receiveBooks(expected));
      expect(state).toEqual(expected);
    });
  });
});
