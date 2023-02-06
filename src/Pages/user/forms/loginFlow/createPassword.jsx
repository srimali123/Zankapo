import React, { useState } from "react";
import { useNavigate } from "react-router";

import { Button, Row, Col, Input } from "antd";
import logoBlue from "../../../../assets/Images/common/bluelogo.png";
import loginImg from "../../../../assets/Images/common/bottomcover.png";
import logo from "../../../../assets/Images/common/LOGO.png";
import { Loader } from "../../../../components/spinner";

import * as userService from "../../../../Services/UserService";
import { useSelector } from "react-redux";

export default function CreatePassword() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);

  const onResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    let data = {
      email: user.email,
      password: password,
    };
    let response = await userService.changePassword(token, data);

    if (response.success) {
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <div>
      <Row className="loginPageConatiner">
        <img src={logo} alt="new" className="logo" />

        <Col xs={24} sm={24} md={24} lg={24} xl={24} className="modalColoumn">
          <div className="loginModalContainer">
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
                <form onSubmit={onResetPassword}>
                  <p className="labelLogin passwordText">New password</p>
                  <Input.Password
                    className="loginInput "
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                  <Button className="loginBtn" htmlType="submit">
                    {loading ? <Loader loading={loading} /> : "Continue"}
                  </Button>
                </form>
              </div>
              <p className="footerText newPasswordFooter">
                2022 copyright Sankapo
              </p>
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
