import React from 'react';
import { Row } from 'antd';
import FooterColumn from './FooterColumn';
import FooterColumnLink from './FooterColumnLink';
import FooterColumnAnchor from './FooterColumnAnchor';

const FooterRow = () => (
  <Row>
    <FooterColumn title="MARKTUBE">
      <FooterColumnLink to="/pricing">PRICING</FooterColumnLink>
      <FooterColumnLink to="/faq">FAQ</FooterColumnLink>
      <FooterColumnLink to="/contactus">Contact Us</FooterColumnLink>
    </FooterColumn>
    <FooterColumn title="POLICIES">
      <FooterColumnLink to="/terms-and-conditions">
        TERMS & CONDITIONS
      </FooterColumnLink>
      <FooterColumnLink to="/privacy-policy">PRIVACY POLICY</FooterColumnLink>
      <FooterColumnLink to="/refund-policy">REFUND POLICY</FooterColumnLink>
    </FooterColumn>
    <FooterColumn title="OUR SERVICES">
      <FooterColumnLink to="/our-services?scroll=advanced-search">
        SEARCH
      </FooterColumnLink>
    </FooterColumn>
    <FooterColumn title="Additional">
      <FooterColumnAnchor href="https://medium.com/@2woongjae">
        MY BLOG
      </FooterColumnAnchor>
    </FooterColumn>
  </Row>
);

export default FooterRow;
