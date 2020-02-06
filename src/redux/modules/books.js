import BookService from '../../services/BookService';

// 액션 타입
const PENDING = 'reactjs-books-review/books/PENDING';
const SUCCESS = 'reactjs-books-review/books/SUCCESS';
const FAIL = 'reactjs-books-review/books/FAIL';

// 액션 생성자
const pending = () => ({ type: PENDING });
const success = books => ({ type: SUCCESS, books });
const fail = error => ({ type: FAIL, error });

// thunk
export const getBooks = token => async dispatch => {
  try {
    dispatch(pending());
    await sleep(2000);
    const res = await BookService.getBooks(token);
    dispatch(success(res.data));
  } catch (error) {
    dispatch(fail(error));
  }
};

// 초기값
const initialState = {
  books: [],
  loading: false,
  error: null,
};

// 리듀서
const books = (state = initialState, action) => {
  switch (action.type) {
    case PENDING:
      return {
        books: [],
        loading: true,
        error: null,
      };
    case SUCCESS:
      return {
        books: action.books,
        loading: false,
        error: null,
      };
    case FAIL:
      return {
        books: [],
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default books;

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
