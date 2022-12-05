import React from 'react'
import { Images } from "../../assets/Images/images";
import { Row, Col, Button, Input } from "antd";
import { Link } from "react-router-dom";
export default function CreateNewAd() {
  return (
    <div className="createAdMainContainer">
    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <div className="createAdContainer">
          <div>
            <img src={Images.common.adLogo} className="placeAdLogo" />
          </div>
          <div>
            <Link to={"/"} href="#" className="cancelLink">
              Cancel
            </Link>
          </div>
        </div>
      </Col>
    </Row>
    <Row gutter={[0, 15]}>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <div className="createAdMiddleContainer">
         <Row gutter={[20, 15]}className='subAdContainer'>
            <Col  xs={24} sm={24} md={18} lg={15} xl={16}>
<div className='contentOne'></div>

            </Col>
            <Col  xs={24} sm={24} md={6} lg={9} xl={8}>
                <div className='contentTwo'></div>
            </Col>
         </Row>
        </div>
      </Col>
    </Row>
  </div>
  )
}
