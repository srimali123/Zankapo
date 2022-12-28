import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

import { Button, Input, Row, Col } from "antd";
import logoBlue from "../../../../assets/Images/common/bluelogo.png";
import loginImg from "../../../../assets/Images/common/bottomcover.png";
import logo from "../../../../assets/Images/common/LOGO.png";
import Loader from "../../../../components/spinner";

import * as userService from "../../../../Services/UserService";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    let response = await userService.sendVerificationEmail(email);

    if (response.success) {
      setLoading(false);
      navigate("/verifyemaillogin");
    } else {
      console.log("Error :", response.message);
    }
    setLoading(false);
  };

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
                <form onSubmit={onSendEmail}>
                  <p className="labelLogin">Email</p>
                  <Input
                    placeholder="Enter your email"
                    className="loginInput emailInput"
                    value={email}
                    name="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <Button className="loginBtn" htmlType="submit">
                    {loading ? <Loader loading={loading} /> : "Continue"}
                  </Button>
                </form>
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
