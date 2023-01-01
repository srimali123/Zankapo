import React from "react";
import { Row, Col, Button } from "antd";
import { Images } from "../../assets/Images/images";

export default function Footer(props) {
  return (
   
      <div  className="mainFooterContainer">
      
            <Row gutter={[20, 30]} className="footerContainer">
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className="footerContent"
              >
                <p className="footerMainHead">Buy</p>
                <a href="#" className="footerLink">
                  How to shop
                </a>
                <a href="#" className="footerLink">
                  Categories
                </a>
                <a href="#" className="footerLink">
                  Popular Brands
                </a>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className="footerContent"
              >
                <p className="footerMainHead">Sell</p>
                <a href="#" className="footerLink">
                  How to sell
                </a>
                <a href="#" className="footerLink">
                  Prices
                </a>
                <a href="#" className="footerLink">
                  Popular Brands
                </a>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className="footerContent"
              >
                <p className="footerMainHead">Contact</p>
                <a href="#" className="footerLink">
                  FAQ
                </a>
                <a href="#" className="footerLink">
                  Privacy policy
                </a>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className="footerContent"
              >
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
                <a>
                  <img src={Images.common.insta} className="socialIcon" />
                </a>
                <a>
                  <img src={Images.common.facebook} className="socialIcon" />
                </a>
                <a>
                  <img src={Images.common.twitter} className="socialIcon" />
                </a>
                <a>
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
                <a>
                  {" "}
                  <img src={Images.common.playBtn} className="FooterBtn" />
                </a>
                <a>
                  {" "}
                  <img src={Images.common.appleBtn} className="FooterBtn appleBtn" />
                </a>
              </Col>
            </Row>

          
         
          <p className="customFooterText">2022 copyright Zambian Market</p>
          </div>
   
  );
}
