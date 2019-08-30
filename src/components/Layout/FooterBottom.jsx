import React from 'react';
import styled from 'styled-components';
import FooterSocialLink from './FooterSocialLink';
import facebook from '../../images/footer_facebook.png';
import linkedin from '../../images/footer_linkedin.png';

const StyledCopyrightDiv = styled.div`
  float: left;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 300;
  text-align: left;
  color: #ffffff;
  margin-top: 40px;
`;

const StyledFacebookDiv = styled.div`
  float: left;
  margin-top: 30px;
  margin-left: 50px;
`;

const StyledLinkedInDiv = styled.div`
  float: left;
  margin-top: 30px;
  margin-left: 30px;
`;

const FooterBottom = () => (
  <div
    style={{
      height: 60,
      marginTop: 30,
      overflow: 'hidden',
    }}
  >
    <StyledCopyrightDiv>© 2019 MARKTUBE RIGHTS RESERVED.</StyledCopyrightDiv>
    <StyledFacebookDiv>
      <FooterSocialLink
        href="https://www.facebook.com/2woongjae"
        src={facebook}
        alt="Facebook"
      />
    </StyledFacebookDiv>
    <StyledLinkedInDiv>
      <FooterSocialLink
        href="https://www.linkedin.com/in/2woongjae"
        src={linkedin}
        alt="LinkedIn"
      />
    </StyledLinkedInDiv>
  </div>
);

export default FooterBottom;
