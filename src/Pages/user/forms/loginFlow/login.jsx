import React, { useState } from "react";

import { LoadingOutlined } from "@ant-design/icons";
import { Button, Row, Col, Spin, Input, Radio, Modal, Checkbox } from "antd";
import { toast } from "react-toastify";

import loginImg from "../../../../assets/Images/common/bottomcover.png";
import logo from "../../../../assets/Images/common/LOGO.png";
import logoBlue from "../../../../assets/Images/common/bluelogo.png";

import * as AuthService from "../../../../Services/AuthService";
import { setAuthenticate } from "../../../../Redux/Slices/Auth";
import { saveUser } from "../../../../Redux/Slices/User";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

export default function Login(props) {
  const [open, setOpen] = useState(false);
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
  });
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticating } = useSelector((state) => state.auth);

  //use effect
  useEffect(() => {
    const GetSavedUserCredentials = async () => {
      const savedUserName = await AuthService.getUsernameKey();
      const savedPassword = await AuthService.getPassword();

      setUserCredential({
        ...userCredential,
        email: savedUserName,
        password: savedPassword,
      });
    };

    GetSavedUserCredentials();
  }, []);

  //input handling
  const onInputHandler = (e) => {
    setUserCredential({ ...userCredential, [e.target.name]: e.target.value });
  };

  //login function
  const onLogin = async (e) => {
    e.preventDefault();

    if (checked) {
      await AuthService.rememberUsernameKey(userCredential.email);
      await AuthService.rememberPassword(userCredential.password);
    }

    setOpen(true);
    let response = await AuthService.loginUser(
      userCredential.email,
      userCredential.password
    );

    //401 user not found
    if (response.success) {
      dispatch(setAuthenticate({ token: response.data.access_token }));
      dispatch(saveUser({ user: response.data.user }));
      setOpen(false);
      navigate("/");
    } else {
      if (response.status == 401) {
        toast.error(response.message);
      }
      if (response.status == 403) {
        toast.error(response.message);
      }
      if (response.status == 404) {
        toast.error(response.message);
      }
    }
    setOpen(false);
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
                <form onSubmit={onLogin}>
                  <p className="labelLogin">Email</p>
                  <Input
                    name="email"
                    placeholder="Enter your email"
                    className="loginInput emailInput"
                    value={userCredential.email}
                    onChange={onInputHandler}
                    type="email"
                    required
                  />
                  <p className="labelLogin passwordText">Password</p>
                  <Input.Password
                    name="password"
                    className="loginInput "
                    value={userCredential.password}
                    onChange={onInputHandler}
                  />

                  <div className="detailLogin">
                    <Checkbox
                      className="radio"
                      checked={checked}
                      onChange={() => setChecked(!checked)}
                    >
                      Remember for 30 days
                    </Checkbox>

                    <Link to={"/forgetpassword"} className="forgetPsswordText">
                      Forgot password
                    </Link>
                  </div>
                  <Button className="loginBtn" htmlType="submit">
                    Login
                  </Button>
                </form>
                <p className="haventAccText">
                  Do not have an account?{" "}
                  <Link to="/register" className="registerLink">
                    Register here{" "}
                  </Link>
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
