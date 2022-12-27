import React from "react";
import { Checkbox, Button, Row, Col, Input, Radio } from "antd";

import logoBlue from "../../../../assets/Images/common/bluelogo.png";


export default function CreatePassword(props) {
  return (
    <div>
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

                  <Button onClick={navigate} className="loginBtn">
                    Continue
                  </Button>
                </div>
                <p className="footerText newPasswordFooter">
                  2022 copyright Sankapo
                </p>
              </div>

    </div>
  );
}
