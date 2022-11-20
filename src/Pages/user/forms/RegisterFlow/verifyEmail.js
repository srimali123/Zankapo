import React from "react";
import { Checkbox, Button, Row, Col, Input, Radio } from "antd";

import logoBlue from "../../../../assets/Images/common/bluelogo.png";
import facebook from "../../../../assets/Images/common/facebook.png";
import social from "../../../../assets/Images/common/socialmedia.png";
import linkedin from "../../../../assets/Images/common/linkedin.png";
import insta from "../../../../assets/Images/common/insta.png";
import twitter from "../../../../assets/Images/common/twitter.png";

export default function VerifyEmailRegister(props) {
  return (
    <div>
      <Row className="verifyPageConatiner">
        <div className="headerContainer">
          <img src={logoBlue} alt="new" className="logo" />
        </div>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className="verifyContentContainer">
            <div className="verifyTextContainer">
              <p  style={{lineHeight:2.5}}>
            <p className="verifyTextUser" >
              Hi Aliyon, 
            </p>
            <p className="verifyTextUser">Thank you for joining <span style={{color:"#F98F21", fontWeight:700}}>  Sankapo</span></p>
            <p className="verifyTextUser"> Kindly follow the link below to confirm and verifiy your account</p>
            <a className="verifyTextUser" href="#" style={{color:"#F98F21", fontWeight:700}}>
            Confirm account
            </a>
            <p  className="verifyTextUser">If you experience any issues logging into your account, reach out to us at [email address].</p>
            <p  className="verifyTextUser" > Best,</p>
            <p  className="verifyTextUser" style={{lineHeight:0}}>The Sankapo team </p>
            </p>
            </div>
            <div className="socialSection">
              <p className="socialsectionText">
                <p>©Sankapo. All rights reserved. </p>
                <p>
                  If you have any questions please contact us{" "}
                  <span className="urlSocial">Ushiftlab@outlook.com</span>

                </p>
                <div className="socialMediaGroup">
                  <a href="#">  <img src={facebook} alt="new" className="socialIcon" /></a>
                  <a href="#">  <img src={social} alt="new" className="socialIcon" /></a>
                  <a href="#">  <img src={linkedin} alt="new" className="socialIcon" /></a>
                  <a href="#">  <img src={insta} alt="new" className="socialIcon" /></a>
                  <a href="#">  <img src={twitter} alt="new" className="socialIcon" /></a>
                </div>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
