import React from "react";
import { Row, Col } from "antd";
import logoBlue from "../../assets/Images/common/bluelogo.png";
import menu from "../../assets/Images/common/menu.png";
export default function Header(props) {
  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className="headerMaincontainer">
            <div className="headerSectionOne">
              
            <img src={menu} alt="new" className="menu" />
            <img src={logoBlue} alt="new" className="logoHeader" />
            </div>


            <div className="headerSectionTwo">
              
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
