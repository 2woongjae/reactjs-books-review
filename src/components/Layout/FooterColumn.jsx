import React from 'react';
import { Col } from 'antd';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 200px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledTitle = styled.h3`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 1.79;
  color: white;
`;

const FooterColumn = ({ title, children }) => (
  <Col span={6}>
    <StyledDiv>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledDiv>
  </Col>
);

export default FooterColumn;
