import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DatePicker, Button, Row, Col, Input } from "antd";

import logoBlue from "../../../../assets/Images/common/bluelogo.png";
import logo from "../../../../assets/Images/common/LOGO.png";
import loginImg from "../../../../assets/Images/common/bottomcover.png";
import Loader from "../../../../components/spinner";

import { useSelector, useDispatch } from "react-redux";
import * as userService from "../../../../Services/UserService";
import { clearUser } from "../../../../Redux/Slices/Signup/UserSlice";
import { saveUser } from "../../../../Redux/Slices/User";
import { setAuthenticate } from "../../../../Redux/Slices/Auth";

export default function SignUpPersonal(props) {
  const [loading, setLoading] = useState(false);
  const [personalData, setPersonalData] = useState({
    fullname: "",
    province: "",
    city: "",
    town: "",
    dob: new Date(),
  });
  const { savedUser } = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //input handling
  const onInputHandler = (e) => {
    setPersonalData({ ...personalData, [e.target.name]: e.target.value });
  };

  //user register
  const onSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    let user = {
      email: savedUser.email,
      phonenumber: savedUser.phonenumber,
      nrc: savedUser.nrc,
      password: savedUser.password,
      fullname: personalData.fullname,
      province: personalData.province,
      city: personalData.city,
      town: personalData.town,
      dob: personalData.dob,
    };
    let response = await userService.registerUser(user);

    if (response.success) {
      console.log("New user has been addedd successfully!");
      dispatch(saveUser({ user: response?.data?.data?.userData }));
      dispatch(setAuthenticate({ token: response?.data?.data?.token }));
      dispatch(clearUser());
      setLoading(false);
      navigate("/");
    } else {
      if (response.status === 403) {
        console.log("Sorry, User with the provided email is already exists!");
      }
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <div>
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
            <div className="registerModal signupPersonalDetailModal">
              <div className="RegisterModalTop signupPersonalModalTop">
                <img src={logoBlue} alt="new" className="logoBlue" />
                <p className="registerHead">Sign up</p>
                <p className="registerSubHead">
                  Sign up and open doors to endless shopping
                </p>
              </div>
              <div className="registerModalContent personaletailModalContent">
                <form onSubmit={onSignup}>
                  <p className="labelRegister">Full name*</p>
                  <Input
                    placeholder="Enter your name"
                    className="registerInput emailInput"
                    name="fullname"
                    value={personalData.fullname}
                    onChange={onInputHandler}
                    required
                  />
                  <p className="labelRegister secondText">Province*</p>
                  <Input
                    placeholder="Select"
                    className="registerInput emailInput"
                    name="province"
                    value={personalData.province}
                    onChange={onInputHandler}
                    required
                  />
                  <Row gutter={15}>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                      <p className="labelRegister secondText">City*</p>
                      <Input
                        placeholder="City"
                        className="registerInput emailInput"
                        name="city"
                        value={personalData.city}
                        onChange={onInputHandler}
                        required
                      />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                      <p className="labelRegister secondText">Town*</p>
                      <Input
                        placeholder="Town"
                        className="registerInput emailInput"
                        name="town"
                        value={personalData.town}
                        onChange={onInputHandler}
                        required
                      />
                    </Col>
                  </Row>
                  <p className="labelRegister secondText">Date of birth*</p>

                  <DatePicker
                    // onChange={onChange}
                    placeholder="Select"
                    className="registerInput emailInput"
                    name="dob"
                    onChange={onInputHandler}
                    required
                  />

                  <Button
                    className="registerBtn personalRegisterBtn"
                    htmlType="submit"
                  >
                    {loading ? <Loader loading={loading} /> : "Sign up"}
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
