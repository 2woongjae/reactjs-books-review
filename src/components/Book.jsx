import React from 'react';
import { Card, Icon, Avatar } from 'antd';

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

export default function Book({ title, message, deleteBook }) {
  async function click() {
    deleteBook();
  }
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <Icon type="edit" key="edit" />,
        <Icon type="delete" key="delete" onClick={click} />,
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={title}
        description={message}
      />
    </Card>
  );
}
