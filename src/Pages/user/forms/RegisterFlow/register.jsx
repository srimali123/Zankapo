import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LoadingOutlined } from "@ant-design/icons";
import { Button, Row, Col, Spin, Input, Modal } from "antd";
import loginImg from "../../../../assets/Images/common/bottomcover.png";
import logo from "../../../../assets/Images/common/LOGO.png";
import logoBlue from "../../../../assets/Images/common/bluelogo.png";
import InputMask from 'react-input-mask';

import { saveUser } from "../../../../Redux/Slices/Signup/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { Images } from "../../../../assets/Images/images";
export default function Register(props) {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    phonenumber: "",
    nrc: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { savedUser } = useSelector((state) => state.register);

  //input handling
  const onInputHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  //user register
  const onSignup = async (e) => {
    e.preventDefault();
    dispatch(saveUser({ savedUser: { ...savedUser, ...userData } }));
    navigate("/personal");
  };

  //set saved reg flow data
  useEffect(() => {
    const GetSavedUser = () => {
      setUserData({ ...userData, ...savedUser });
    };
    GetSavedUser();
  }, []);

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

      <Row className="registerPageConatiner">
        <img src={logo} alt="new" className="logo" />

        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={24}
          className="modalColoumnRegister"
        >
          <div className="registerModalContainer">
            {/* signup modal 1 */}
            <div className="registerModal ">
              <div className="RegisterModalTop">
                <img src={logoBlue} alt="new" className="logoBlue" />
                <p className="registerHead">Sign up</p>
                <p className="registerSubHead">
                  Sign up and open doors to endless shopping
                </p>
              </div>
              <div className="registerModalContent">
                <form onSubmit={onSignup}>
                  <p className="labelRegister">Email*</p>
                  <Input
                    name="email"
                    placeholder="Enter your email"
                    className="registerInput emailInput"
                    type="email"
                    value={userData.email}
                    onChange={onInputHandler}
                    required
                  />
                  <p className="labelRegister secondText">Phone number*</p>
                  
                  {/* <Input
                    name="phonenumber"
                    placeholder="96XXXXXXX"
                    className="registerInput emailInput"
                    type="text"
                    value={userData.phonenumber}
                    onChange={onInputHandler}
                    required
                    maxLength={9}
                  /> */}
                   <div className="registerInput emailInput mobileFlex ">
                   <img
                    src={Images.common.translate}
                    alt="new"
                    className="translateImgReg"
                  />
                  <InputMask name="phonenumber"
                    placeholder="96XXXXXXX"  mask="(99)9999999"  
                    value={userData.phonenumber}
                    onChange={onInputHandler}
                    required
                    className="mask"
                    />
                    </div>
                  <p className="labelRegister secondText">NRC Number*</p>
                 
                  <InputMask mask="999999/99/9"  name="nrc"
                    placeholder="eg. 617394/10/1"
                    className="registerInput emailInput"
                    value={userData.nrc}
                    onChange={onInputHandler}
                    required
                    />
               
                  
                  {/* <Input
                    name="nrc"
                    placeholder="eg. 617394/10/1"
                    className="registerInput emailInput"
                    type="text"
                    value={userData.nrc}
                    onChange={onInputHandler}
                    required
                    maxLength={9}
                  /> */}

                  <p className="labelRegister passwordText">Password</p>
                  <Input.Password
                    className="registerInput "
                    name="password"
                    value={userData.password}
                    onChange={onInputHandler}
                    required
                    minLength={8}
                  />
                  <p className="mustText">Must be at least 8 characters.</p>

                  <Button className="registerBtn" htmlType="submit">
                    Continue
                  </Button>
                </form>
              </div>
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
