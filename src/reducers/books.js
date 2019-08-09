import { DELETE_BOOK, RECEIVE_BOOKS, UNDO_DELETE_BOOK } from '../actions';

const initialState = [
  //   {
  //     bookId: 1,
  //     ownerId: '7d26db27-168c-4c6a-bd9a-9e20677b60b8',
  //     title: '모던 자바스크립트 입문',
  //     message: '모던하군요',
  //     author: '서재원',
  //     url:
  //       'http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791160504439&orderClick=LET&Kc=',
  //     createdAt: '2019-05-15T07:18:14.000Z',
  //     updatedAt: '2019-06-07T22:56:50.000Z',
  //     deletedAt: null,
  //   },
];

export default function books(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_BOOKS:
      return [...state, ...action.books];

    case DELETE_BOOK: {
      const newState = [...state];
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].bookId === action.bookId)
          newState[i].deletedAt = new Date().toISOString();
      }
      return newState;
    }

    case UNDO_DELETE_BOOK: {
      const newState = [...state];
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].bookId === action.bookId) newState[i].deletedAt = null;
      }
      return newState;
    }

    default:
      return state;
  }
}
