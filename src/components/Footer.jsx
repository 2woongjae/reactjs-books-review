import React from 'react';
import { Row, Col } from 'antd';
import facebook from '../images/footer_facebook.png';
import linkedin from '../images/footer_linkedin.png';
import {
  StyledLink,
  StyledFooter,
  StyledFooterColDiv,
  FooterTitle,
  StyledAnchor,
  StyledInfoArea,
  StyledCopyright,
  StyledSNS,
} from './Footer.style';

const FooterLink = ({ to, children }) => (
  <div
    style={{
      paddingTop: 3,
      paddingBottom: 3,
    }}
  >
    <StyledLink to={to}>{children}</StyledLink>
  </div>
);

const SNSLink = ({ href, imgSrc, alt }) => (
  <StyledSNS>
    <a href={href} target="_BLANK" rel="noopener noreferrer">
      <img
        src={imgSrc}
        style={{
          height: 30,
        }}
        alt={alt}
      />
    </a>
  </StyledSNS>
);

const FooterAnchor = ({ children }) => (
  <div
    style={{
      paddingTop: 3,
      paddingBottom: 3,
    }}
  >
    {children}
  </div>
);

export default function Footer() {
  return (
    <StyledFooter>
      <Row>
        <Col span={6}>
          <StyledFooterColDiv>
            <FooterTitle>MARKTUBE</FooterTitle>
            <FooterLink to="/pricing">PRICING</FooterLink>
            <FooterLink to="/faq">FAQ</FooterLink>
            <FooterLink to="/contactus">Contact Us</FooterLink>
          </StyledFooterColDiv>
        </Col>
        <Col span={6}>
          <StyledFooterColDiv>
            <FooterTitle>POLICIES</FooterTitle>
            <FooterLink to="/terms-and-conditions">
              TERMS & CONDITIONS
            </FooterLink>
            <FooterLink to="/privacy-policy">PRIVACY POLICY</FooterLink>
            <FooterLink to="/refund-policy">REFUND POLICY</FooterLink>
          </StyledFooterColDiv>
        </Col>
        <Col span={6}>
          <StyledFooterColDiv>
            <FooterTitle>OUR SERVICES</FooterTitle>
            <FooterLink to="/our-services?scroll=advanced-search">
              SEARCH
            </FooterLink>
          </StyledFooterColDiv>
        </Col>
        <Col span={6}>
          <StyledFooterColDiv>
            <FooterTitle>Additional</FooterTitle>
            <FooterAnchor>
              <StyledAnchor
                href="https://medium.com/@2woongjae"
                target="_BLANK"
              >
                MY BLOG
              </StyledAnchor>
            </FooterAnchor>
          </StyledFooterColDiv>
        </Col>
      </Row>
      <StyledInfoArea>
        <StyledCopyright>© 2019 MARKTUBE RIGHTS RESERVED.</StyledCopyright>
        <SNSLink
          href="https://www.facebook.com/2woongjae"
          imgSrc={facebook}
          alt="facebook"
        />
        <SNSLink
          href="https://www.linkedin.com/in/2woongjae"
          imgSrc={linkedin}
          alt="linkedin"
        />
      </StyledInfoArea>
    </StyledFooter>
  );
}
