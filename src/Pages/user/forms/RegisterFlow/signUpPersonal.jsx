import React from "react";
import { Checkbox, Button, Row, Col, Input, Radio } from "antd";

import logoBlue from "../../../../assets/Images/common/bluelogo.png";


export default function SignUpPersonal(props) {
  return (
    <div>
     <div className="registerModal signupPersonalDetailModal">
              <div className="RegisterModalTop signupPersonalModalTop">
                <img src={logoBlue} alt="new" className="logoBlue" />
                <p className="registerHead">Sign up</p>
                <p className="registerSubHead">
                  Sign up and open doors to endless shopping
                </p>
              </div>
              <div className="registerModalContent personaletailModalContent">
                <p className="labelRegister">Full name*</p>
                <Input
                  placeholder="Enter your name"
                  className="registerInput emailInput"
                />
                <p className="labelRegister secondText">Province*</p>
                <Input
                  placeholder="Select"
                  className="registerInput emailInput"
                />
                <Row gutter={15}>
                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    <p className="labelRegister secondText">City*</p>
                    <Input
                      placeholder="City"
                      className="registerInput emailInput"
                    />
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    <p className="labelRegister secondText">Town*</p>
                    <Input
                      placeholder="Town"
                      className="registerInput emailInput"
                    />
                  </Col>
                </Row>
                <p className="labelRegister secondText">Date of birth*</p>

                <DatePicker
                  onChange={onChange}
                  placeholder="Select"
                  className="registerInput emailInput"
                />

                <Button
                  className="registerBtn personalRegisterBtn"
                  onClick={() => setOpen(true)}
                >
                  Sign up
                </Button>
              </div>
            </div>
    </div>
  );
}
