import React from 'react';
import Enzyme, { mount } from 'enzyme';
import BookContainer from './BookContainer';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';

Enzyme.configure({ adapter: new Adapter() });

describe('BookContainer', () => {
  let component = null;
  const mockStore = configureMockStore([thunk]);

  // 가짜 스토어 만들기
  let store = mockStore({
    books: [],
    select: {
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
    router: {
      location: {
        pathname: '/book/1',
      },
    },
    loading: false,
  });

  it('renders properly', () => {
    component = mount(
      <BookContainer
        token={null}
        store={store}
        match={{ params: { bookId: '1' } }}
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
