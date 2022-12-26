import React, { useState } from "react";

import { LoadingOutlined } from "@ant-design/icons";
import { Button, Row, Col, Spin, Input, Radio, Modal } from "antd";

import loginImg from "../../../../assets/Images/common/bottomcover.png";
import logo from "../../../../assets/Images/common/LOGO.png";
import logoBlue from "../../../../assets/Images/common/bluelogo.png";

import * as AuthService from "../../../../Services/AuthService";
import { authenticate, setAuthenticate } from "../../../../Redux/Slices/Auth";
import { saveUser } from "../../../../Redux/Slices/User";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticating } = useSelector((state) => state.auth);
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
  });

  //input handling
  const onInputHandler = (e) => {
    setUserCredential({ ...userCredential, [e.target.name]: e.target.value });
  };

  //login function
  const onLogin = async (e) => {
    e.preventDefault();
    setOpen(true);
    let response = await AuthService.loginUser(
      userCredential.email,
      userCredential.password
    );

    if (response.success) {
      dispatch(setAuthenticate({ token: response.data.access_token }));
      dispatch(saveUser({ user: response.data.user }));
      setOpen(false);
      navigate("/");
    }
  };

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 35, color: "white" }} spin />
  );

  return (
    <div>
      <Modal
        wrapClassName="loadingModal"
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={"100%"}
      >
        <Spin indicator={antIcon} />;
      </Modal>

      <Row className="loginPageConatiner">
        <img src={logo} alt="new" className="logo" />

        <Col xs={24} sm={24} md={24} lg={24} xl={24} className="modalColoumn">
          <div className="loginModalContainer">
            {/* login modal */}

            <div className="loginModal">
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
                  name="email"
                  placeholder="Enter your email"
                  className="loginInput emailInput"
                  value={userCredential.email}
                  onChange={onInputHandler}
                />
                <p className="labelLogin passwordText">Password</p>
                <Input.Password
                  name="password"
                  className="loginInput "
                  value={userCredential.password}
                  onChange={onInputHandler}
                />

                <div className="detailLogin">
                  <Radio className="radio">Remember for 30 days</Radio>

                  <a className="forgetPsswordText">Forgot password</a>
                </div>
                <Button className="loginBtn" onClick={onLogin}>
                  Login
                </Button>
                <p className="haventAccText">
                  Do not have an account?{" "}
                  <a href="/register" className="registerLink">
                    Register here{" "}
                  </a>
                </p>
              </div>
              <p className="footerText">2022 copyright Sankapo</p>
            </div>

            {/* forget password */}

            {/* <div className="loginModal forgetPasswordModal">
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
              </div> */}

            {/* create new passowrd */}

            {/* <div className="loginModal forgetPasswordModal newPasswordModal">
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
              </div> */}
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
