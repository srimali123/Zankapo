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
          <a href="#" className="footerLink">
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
          <a href="#" className="footerLink">
            Prices
          </a>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="footerContent">
          <p className="footerMainHead">Contact</p>
          <a href="#" className="footerLink">
            FAQ
          </a>
          <a href="#" className="footerLink">
            Privacy policy
          </a>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="footerContent">
          <p className="footerMainHead">Information</p>
          <a href="#" className="footerLink">
            Terms of service
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
          <a href="https://www.instagram.com/" target="_blank">
            <img src={Images.common.insta} className="socialIcon" />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <img src={Images.common.facebook} className="socialIcon" />
          </a>
          <a href="https://www.twitter.com/" target="_blank">
            <img src={Images.common.twitter} className="socialIcon" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <img src={Images.common.linkedin} className="socialIcon" />
          </a>

          <img src={Images.common.line} className="line" />
        </Col>

        <Col
          xs={12}
          sm={12}
          md={6}
          lg={12}
          xl={12}
          className="btnSectionFooter"
        >
          <a href="https://play.google.com/" target="_blank">
            {" "}
            <img src={Images.common.playBtn} className="FooterBtn" />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank">
            {" "}
            <img src={Images.common.appleBtn} className="FooterBtn appleBtn" />
          </a>
        </Col>
      </Row>

      <p className="customFooterText">2022 copyright Zambian Market</p>
    </div>
  );
}
