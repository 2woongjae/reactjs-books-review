import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  height: 30px;
`;

const FooterSocialLink = ({ href, src, alt }) => (
  <a href={href} target="_BLANK" rel="noopener noreferrer">
    <StyledImg src={src} alt={alt} />
  </a>
);

export default FooterSocialLink;
