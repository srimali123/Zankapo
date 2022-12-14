import React from "react";
import { Images } from "../../assets/Images/images";
import { Row, Col, Button, Input, Divider, Tabs } from "antd";
import { Link } from "react-router-dom";
const { TextArea } = Input;
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
            <Row gutter={[20, 15]} className="subAdContainer">
              <Col xs={24} sm={24} md={18} lg={15} xl={16}>
                <div className="contentOne">
                  <p className="createAdTopic">Create New Ad</p>
                  <Input placeholder="Title" className="inputCreateAd" />
                  <p className="inputText">
                    Include keywords such as brand color, size etc.
                  </p>
                  <div className="normlAdCont">
                    <Input
                      placeholder="Categorie"
                      className="inputCreateAd categoryInput"
                    />
                    <TextArea
                      placeholder="Description"
                      className="inputCreateAd categoryInput2"
                      autoSize={{ minRows: 5, maxRows: 5 }}
                    />
                    <p className="inputText">
                      Give a brief description about what you are advertising
                    </p>

                    <p className="imagesTopic">Images</p>
                    <div className="inputCreateAd ImgesCont">
                      <img
                        src={Images.common.camera}
                        className="cameraIcon"
                        alt="camera"
                      />
                      <Link to="/" className="dropText">
                        Drop your images here
                      </Link>
                    </div>
                    <p className="conditionText">Conditions</p>
                    <div className="btnGroup">
                      <Button className="usedBtn">Used</Button>
                      <Button className="usedBtn">New</Button>
                    </div>
                    <Divider className="divider" />
                    <div className="tabsSection">
                      <Tabs defaultActiveKey="1">
                        <Tabs.TabPane tab="Buy Now" key="1">
                       <p className="tabText">Price</p>
                       <Input
                      placeholder="Price"
                      className="inputCreateAd tabInput"
                    />
                       
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Auction" key="2">
                        <p className="tabText">Price</p>
                       <Input
                      placeholder="Price"
                      className="inputCreateAd tabInput"
                    />
                        </Tabs.TabPane>
                      
                      </Tabs>
                    </div>
                    <Divider className="divider" />

                    <div className="shippingSection">
                      <p className="shippingText">Shipping options</p>

                      <p className="offerText">Offer shipping</p>
                      <p className="shipingText">The buyer will pay for shipping</p>
                      <Button className="shipingButton">Post Ad</Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={6} lg={9} xl={8}>
                <div className="contentTwo"></div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
