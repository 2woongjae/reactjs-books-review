import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import FooterRow from './FooterRow';
import FooterBottom from './FooterBottom';

const StyledFooter = styled(Layout.Footer)`
  width: 100%;
  padding-top: 60px;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 60px;
  background-color: #0a222e;
`;

const Footer = () => (
  <StyledFooter>
    <FooterRow />
    <FooterBottom />
  </StyledFooter>
);

export default Footer;
