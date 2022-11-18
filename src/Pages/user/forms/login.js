import React from "react";
import { Checkbox, Button, Row, Col, Input, Radio, } from "antd";
import loginImg from "../../../assets/Images/common/bottomcover.png";
import logo from "../../../assets/Images/common/LOGO.png";
import logoBlue from "../../../assets/Images/common/bluelogo.png";
export default function Login(props) {
  return (
    <div>
      <Row className="loginPageConatiner">
        <img src={logo} alt="new" className="logo" />

        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className="loginModalContainer">
            {/* login modal */}
            {/* <div className="loginModal">
              <div className="loginModaTop">
                <img src={logoBlue} alt="new" className="logoBue" />
                <p className="loginHead">Log in to your account</p>
                <p className="loginSubHead">
                  Welcome back! Please enter your details.
                </p>
              </div>
              <div className="loginModalContent">
                <p className="labelLogin">Email</p>
                <Input
                  placeholder="Enter your email"
                  className="loginInput emailInput"
                />
                <p className="labelLogin passwordText">Password</p>
                <Input.Password className="loginInput " />

                <div className="detailLogin">
                <Radio className="radio">Remember for 30 days</Radio>
               
                <a href="#" className="forgetPsswordText">Forgot password</a>
                </div>
                <Button className="loginBtn">Login</Button>
                <p className="haventAccText">Do not have an account? <a href="#" className="registerLink">Register here </a></p>
              </div>
            </div> */}


            {/* forget password */}
            {/* <div className="loginModal forgetPasswordModal">
              <div className="loginModaTop forgetmodalTop">
                <img src={logoBlue} alt="new" className="logoBue" />
                <p className="loginHead">Forgot password?</p>
                <p className="loginSubHead forgetSubHead">
                Enter your email and we will send you a link to reset your password
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
            </div> */}

            {/* create new passowrd */}
            <div className="loginModal forgetPasswordModal newPasswordModal">
              <div className="loginModaTop forgetmodalTop">
                <img src={logoBlue} alt="new" className="logoBue" />
                <p className="loginHead">Create a new password</p>
                <p className="loginSubHead forgetSubHead">
                Enter a new safe and secure password to use for your account
                </p>
              </div>
              <div className="loginModalContent">
              <p className="labelLogin passwordText">New password</p>
                <Input.Password className="loginInput " />

               
                <Button className="loginBtn">Continue</Button>
               
              </div>
              <p className="footerText newPasswordFooter">2022 copyright Sankapo</p>
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
