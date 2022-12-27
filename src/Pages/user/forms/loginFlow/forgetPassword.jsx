import React from "react";
import { Checkbox, Button, Row, Col, Input, Radio } from "antd";

import logoBlue from "../../../../assets/Images/common/bluelogo.png";


export default function ForgetPassword(props) {
  return (
    <div>
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

                  <Button
                    onClick={() => setCreatePasswordShowModal(true)}
                    className="loginBtn"
                  >
                    Continue
                  </Button>
                </div>
                <p className="footerText">2022 copyright Sankapo</p>
              </div>

    </div>
  );
}
