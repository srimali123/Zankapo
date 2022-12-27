import React from "react";
import { Button, Input, Row, Col } from "antd";

import logoBlue from "../../../../assets/Images/common/bluelogo.png";
import loginImg from "../../../../assets/Images/common/bottomcover.png";
import logo from "../../../../assets/Images/common/LOGO.png";

export default function ForgetPassword() {
  return (
    <div>
      <Row className="loginPageConatiner">
        <img src={logo} alt="new" className="logo" />

        <Col xs={24} sm={24} md={24} lg={24} xl={24} className="modalColoumn">
          <div className="loginModalContainer">
            {/* forget password */}

            <div className="loginModal forgetPasswordModal">
              <div className="loginModaTop forgetmodalTop">
                <img src={logoBlue} alt="new" className="logoBue" />
                <p className="loginHead">Forgot password?</p>
                <p className="loginSubHead forgetSubHead">
                  Enter your email and we will send you a link to reset your
                  password
                </p>
              </div>
              <div className="loginModalContent">
                <p className="labelLogin">Email</p>
                <Input
                  placeholder="Enter your email"
                  className="loginInput emailInput"
                />

                <Button className="loginBtn">Continue</Button>
              </div>
              <p className="footerText">2022 copyright Sankapo</p>
            </div>
          </div>

          <div
            className="leftSectionLogin"
            style={{
              backgroundImage: `url(${loginImg})`,
            }}
          ></div>
        </Col>
      </Row>
    </div>
  );
}
