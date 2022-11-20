import React from "react";
import { Checkbox, Button, Row, Col, Input, Radio } from "antd";

import logoBlue from "../../../../assets/Images/common/bluelogo.png";
import facebook from "../../../../assets/Images/common/facebook.png";
import social from "../../../../assets/Images/common/socialmedia.png";
import linkedin from "../../../../assets/Images/common/linkedin.png";
import insta from "../../../../assets/Images/common/insta.png";
import twitter from "../../../../assets/Images/common/twitter.png";

export default function VerifyEmail(props) {
  return (
    <div>
      <Row className="verifyPageConatiner">
        <div className="headerContainer">
          <img src={logoBlue} alt="new" className="logo" />
        </div>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className="verifyContentContainer">
            <div className="verifyTextContainer">
            <p className="verifyTextUser">
              Hi Aliyon, you have requested to reset your password. follow the
              link below to reset your password
            </p>
            <a href="*" className="resetPasswordText">
              Reset password
            </a>
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
