import React from "react";
import { Row, Col, Button } from "antd";
import { Images } from "../../assets/Images/images";
import { useNavigate } from "react-router-dom";

export default function Footer(props) {
  const navigate = useNavigate();
  return (
    <div className="mainFooterContainer">
      <Row gutter={[20, 30]} className="footerContainer">
        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="footerContent">
          <p className="footerMainHead">Buy</p>
          <a href="/howToBuy" className="footerLink">
            How to shop
          </a>
          <a className="footerLink" onClick={() => navigate("/placeAd")}>
            Categories
          </a>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="footerContent">
          <p className="footerMainHead">Sell</p>
          <a href="#" className="footerLink">
            How to sell
          </a>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="footerContent">
          <p className="footerMainHead">Contact</p>
          <a href="tel:+260777000723" className="footerLink">
            (+260) 777000723
          </a>
          <a href="mailto:we@sankapo.com" className="footerLink">
            we@sankapo.com
          </a>
          <p className="footerLink">
            Chainama Road Olympia <br />
            Lusaka, Zambia
          </p>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="footerContent">
          <p className="footerMainHead">Information</p>
          <a href="/termsofservices" className="footerLink">
            Terms of service
          </a>
          <a href="/faq" className="footerLink">
            FAQ
          </a>
          <a href="/privacyPolicy" className="footerLink">
            Privacy policy
          </a>
          <a href="/vendorAgreements" className="footerLink">
            Vendor Agreements
          </a>
          <a href="/cancelPolicies" className="footerLink">
          Return, Refund, and Cancellation policies 
          </a>

        </Col>
      </Row>
      <Row className="socialMediaContainer">
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={12}
          xl={12}
          className="socialMediaSection"
        >
          <a href="https://www.instagram.com/sankapo365/" target="_blank">
            <img src={Images.common.insta} className="socialIcon" />
          </a>
          <a href="https://www.facebook.com/sankapo.buy.sell/" target="_blank">
            <img src={Images.common.facebook} className="socialIcon" />
          </a>

          <a
            href="https://www.linkedin.com/showcase/sankapo-add-it-like-it-get-it/?viewAsMember=true"
            target="_blank"
          >
            <img src={Images.common.linkedin} className="socialIcon" />
          </a>
        </Col>
      </Row>

      <p className="customFooterText">2022 copyright Sankapo</p>
    </div>
  );
}
