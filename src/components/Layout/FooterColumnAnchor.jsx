import React from 'react';
import styled from 'styled-components';

const StyledAnchor = styled.a`
  font-family: Roboto;
  font-weight: 300;
  font-size: 16px;
  line-height: 2.03;
  color: white;
  text-transform: uppercase;
`;

const FooterColumnAnchor = ({ href, children }) => (
  <div
    style={{
      paddingTop: 3,
      paddingBottom: 3,
    }}
  >
    <StyledAnchor href={href} target="_BLANK">
      {children}
    </StyledAnchor>
  </div>
);

export default FooterColumnAnchor;
