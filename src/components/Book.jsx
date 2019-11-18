import React from 'react';
import { Card, Icon } from 'antd';

const { Meta } = Card;

// const sample = {
//   bookId: 1,
//   ownerId: '7a1fcf00-6cc6-4f54-84f1-2e55d301d4b5',
//   title: '모던 자바스크립트 입문',
//   message: '모던하군요',
//   author: '서재원',
//   url:
//     'http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791160504439&orderClick=LET&Kc=',
//   createdAt: '2019-08-29T03:16:11.000Z',
//   updatedAt: '2019-08-29T03:16:11.000Z',
//   deletedAt: null,
// };

const Book = ({ title, message, deleteBook, detailBook, editBook }) => (
  <Card
    hoverable
    style={{ marginBottom: 30 }}
    actions={[
      <Icon type="edit" key="edit" onClick={editBook} />,
      <Icon type="delete" key="delete" onClick={deleteBook} />,
    ]}
  >
    <Meta title={title} description={message} onClick={detailBook} />
  </Card>
);

export default Book;
