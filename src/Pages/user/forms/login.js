import React from 'react'
import { Checkbox, Button, Row, Col, Input } from "antd";
import loginImg from "../../../assets/Images/common/bottomcover.png";
import logo from "../../../assets/Images/common/LOGO.png";

export default function Login(props) {
    

    return (
        
    <div>
      <Row className="loginPageConatiner" >
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <img src={logo} alt="new" className='logo' />
          <div
            className="leftSectionLogin"
            style={{
              backgroundImage: `url(${loginImg})`,
            }}
          ></div>
        </Col>
     
      </Row>
    </div>
 
    )
}
