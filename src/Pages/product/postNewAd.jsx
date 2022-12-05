import React from "react";
import { Images } from "../../assets/Images/images.js";
import { Row, Col, Button, Input } from "antd";
import { Link } from "react-router-dom";
export default function PostNewAd() {
  return (
    <div className="postAdMainContainer">
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className="postAdContainer">
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
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className="postAdMiddleContainer">
            <div className="subContainer">
            <p className="mainHead">What do you want to advertise</p>
            <Row gutter={[70, 15]} className="cardContainer">
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className="whiteBox">
                  <div>
                    {" "}
                    <img className="cardImg" src={Images.discover.house} />
                  </div>
                  <div>
                    {" "}
                    <Link to={"/createAd"} className="cardText">Real estate</Link>
                  </div>
                </div>
                <div className="whiteBox marginBox">
                  <div>
                    {" "}
                    <img className="cardImg" src={Images.discover.mobile} />
                  </div>
                  <div>
                    {" "}
                    <Link to={"/"} className="cardText">Mobile phones</Link>
                  </div>
                </div>
                <div className="whiteBox marginBox">
                  <div>
                    {" "}
                    <img className="cardImg" src={Images.discover.houseHold} />
                  </div>
                  <div>
                    {" "}
                    <Link to={"/"} className="cardText">Household</Link>
                  </div>
                </div>
                <div className="whiteBox marginBox">
                  <div>
                    {" "}
                    <img className="cardImg" src={Images.discover.electronics} />
                  </div>
                  <div>
                    {" "}
                    <Link to={"/"} className="cardText">Electronics</Link>
                  </div>
                </div>


              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className="whiteBox whiteBox2">
                  <div>
                    {" "}
                    <img className="cardImg" src={Images.discover.cloths} />
                  </div>
                  <div>
                    {" "}
                    <Link to={"/"} className="cardText">Clothes</Link>
                  </div>
                </div>
                <div className="whiteBox whiteBox2 marginBox">
                  <div>
                    {" "}
                    <img className="cardImg" src={Images.discover.cars} />
                  </div>
                  <div>
                    {" "}
                    <Link to={"/"} className="cardText">Vehicles</Link>
                  </div>
                </div>

                <div className="whiteBox whiteBox2 marginBox">
                  <div>
                    {" "}
                    <img className="cardImg" src={Images.discover.collection} />
                  </div>
                  <div>
                    {" "}
                    <Link to={"/"}className="cardText">Collectibles</Link>
                  </div>
                </div>
                <div className="whiteBox whiteBox2 marginBox">
                  <div>
                    {" "}
                    <img className="cardImg" src={Images.discover.computer} />
                  </div>
                  <div>
                    {" "}
                    <Link to={"/"} className="cardText">Computers</Link>
                  </div>
                </div>
              </Col>
            </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
