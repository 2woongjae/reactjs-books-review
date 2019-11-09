import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledFooter = styled(Layout.Footer)`
  width: 100%;
  padding-top: 60px;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 60px;
  background-color: #0a222e;
`;

export const StyledFooterColDiv = styled.div`
  width: 200px;
  margin-left: auto;
  margin-right: auto;
`;

export const FooterTitle = styled.h3`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 1.79;
  color: white;
`;

export const StyledLink = styled(Link)`
  font-family: Roboto;
  font-weight: 300;
  font-size: 16px;
  line-height: 2.03;
  color: white;
  text-transform: uppercase;
`;

export const StyledAnchor = styled.a`
  font-family: Roboto;
  font-weight: 300;
  font-size: 16px;
  line-height: 2.03;
  color: white;
  text-transform: uppercase;
`;

export const StyledInfoArea = styled.div`
  height: 60px;
  margin-top: 30px;
  overflow: hidden;
`;

export const StyledCopyright = styled.div`
  float: left;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 300;
  text-align: left;
  color: #ffffff;
  margin-top: 40px;
`;

export const StyledSNS = styled.div`
  float: left;
  margin-top: 30px;
  margin-left: 50px;
`;
