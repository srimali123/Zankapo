import React from "react";
import { Images } from "../../assets/Images/images";
import {
  Row,
  Col,
  Button,
  Input,
  Divider,
  Tabs,
  Menu,
  Dropdown,
  Checkbox,
} from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import PreviewAd from "./previewAd";
const { TextArea } = Input;
const onChange = (checkedValues) => {
  console.log("checked = ", checkedValues);
};
const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
  {
    key: "4",

    label: "a danger item",
  },
];
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
              <Col xs={24} sm={24} md={14} lg={15} xl={16} className="col">
                <div className="contentOne">
                  <p className="createAdTopic">Create New Ad</p>
                  <Input placeholder="Title" className="inputCreateAd" />
                  <p className="inputText">
                    Include keywords such as brand color, size etc.
                  </p>
                  {/* <div className="normlAdCont">
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
                          <p className="tabText">Starting bid price</p>
                          <Input
                            placeholder="Price"
                            className="inputCreateAd tabInput"
                          />
                            <p className="tabText customtabText">Bid duration</p>
                          <Input
                            placeholder="Bid duration"
                            className="inputCreateAd tabInput"
                          />
                        </Tabs.TabPane>
                      </Tabs>
                    </div>
                    <Divider className="divider" />

                    <div className="shippingSection">
                      <p className="shippingText">Shipping options</p>

                      <p className="offerText">Offer shipping</p>
                      <p className="shipingText">
                        The buyer will pay for shipping
                      </p>
                      <Link to="/PreviewAd"><Button  className="shipingButton previewBtn">Preview ad</Button></Link>
                      <Button className="shipingButton">Post Ad</Button>
                    </div>
                  </div> */}

                  {/* house /apartment ad */}

                  <div className="houseAdCont">
                    <Row gutter={[20, 30]}>
                      <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <div>
                          <Dropdown
                            trigger={["click"]}
                            className="createDrop"
                            menu={{
                              items,
                            }}
                          >
                            <a onClick={(e) => e.preventDefault()}>
                              Province
                              <DownOutlined />
                            </a>
                          </Dropdown>
                        </div>
                      </Col>
                      <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <Dropdown
                          trigger={["click"]}
                          className="createDrop"
                          menu={{
                            items,
                          }}
                        >
                          <a onClick={(e) => e.preventDefault()}>
                            City
                            <DownOutlined />
                          </a>
                        </Dropdown>
                      </Col>
                      <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <Dropdown
                          trigger={["click"]}
                          className="createDrop"
                          menu={{
                            items,
                          }}
                        >
                          <a onClick={(e) => e.preventDefault()}>
                            Town
                            <DownOutlined />
                          </a>
                        </Dropdown>
                      </Col>
                    </Row>

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

                    <div className="residentialCont">
                      <p className="residetialHead">Residential Type</p>
                      <div>
                        <Checkbox.Group
                          style={{
                            width: "100%",
                          }}
                          onChange={onChange}
                        >
                          <Row gutter={[0, 15]}>
                            <Col xs={24} sm={24} md={24} lg={5} xl={6}>
                              <Checkbox
                                className="checkCreateProduct"
                                value="A"
                              >
                                House
                              </Checkbox>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={5} xl={6}>
                              <Checkbox
                                className="checkCreateProduct"
                                value="B"
                              >
                                Apartment
                              </Checkbox>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={7} xl={6}>
                              <Checkbox
                                className="checkCreateProduct"
                                value="C"
                              >
                                Shared Apartment
                              </Checkbox>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={7} xl={6}>
                              <Checkbox
                                className="checkCreateProduct"
                                value="D"
                              >
                                Boarding house
                              </Checkbox>
                            </Col>
                          </Row>
                        </Checkbox.Group>
                      </div>
                    </div>
                    <div className="AreaCont">
                      <p className="areaText">Living area(m2) </p>
                      <div className="areaCalculate">
                        <Input
                          className="inputCreate"
                          placeholder="Enter length"
                        />
                        <p className="multiply">x</p>
                        <Input
                          className="inputCreate"
                          placeholder="Enter width"
                        />
                      </div>

                      <p className="areaText roomsText">Number of rooms</p>
                      <div>
                        <Dropdown
                          trigger={["click"]}
                          className="selectDropddown"
                          menu={{
                            items,
                          }}
                        >
                          <a onClick={(e) => e.preventDefault()}>Select</a>
                        </Dropdown>
                      </div>

                      <p className="areaText roomsText">Running water</p>
                      <div>
                        <Checkbox.Group
                          style={{
                            width: "100%",
                          }}
                          onChange={onChange}
                        >
                          <Row gutter={[0, 12]}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                              <Checkbox
                                className="checkCreateProduct"
                                value="A"
                              >
                                Available
                              </Checkbox>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                              <Checkbox
                                className="checkCreateProduct"
                                value="B"
                              >
                                Unavailable
                              </Checkbox>
                            </Col>
                          </Row>
                        </Checkbox.Group>
                      </div>

                      <p className="areaText roomsText">Electricity</p>
                      <div>
                        <Checkbox.Group
                          style={{
                            width: "100%",
                          }}
                          onChange={onChange}
                        >
                          <Row gutter={[0, 12]}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                              <Checkbox
                                className="checkCreateProduct"
                                value="A"
                              >
                                Available
                              </Checkbox>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                              <Checkbox
                                className="checkCreateProduct"
                                value="B"
                              >
                                Unavailable
                              </Checkbox>
                            </Col>
                          </Row>
                        </Checkbox.Group>
                      </div>

                      <p className="areaText roomsText">Restroom</p>
                      <div>
                        <Checkbox.Group
                          style={{
                            width: "100%",
                          }}
                          onChange={onChange}
                        >
                          <Row gutter={[0, 12]}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                              <Checkbox
                                className="checkCreateProduct"
                                value="A"
                              >
                                Available
                              </Checkbox>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                              <Checkbox
                                className="checkCreateProduct"
                                value="B"
                              >
                                Unavailable
                              </Checkbox>
                            </Col>
                          </Row>
                        </Checkbox.Group>
                      </div>

                      <p className="areaText roomsText">Security</p>
                      <div>
                        <Checkbox.Group
                          style={{
                            width: "100%",
                          }}
                          onChange={onChange}
                        >
                          <Row gutter={[0, 12]}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                              <Checkbox
                                className="checkCreateProduct"
                                value="A"
                              >
                                Available
                              </Checkbox>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                              <Checkbox
                                className="checkCreateProduct"
                                value="B"
                              >
                                Unavailable
                              </Checkbox>
                            </Col>
                          </Row>
                        </Checkbox.Group>
                      </div>

                      <p className="areaText roomsText">Room Arrangement</p>
                      <div>
                        <Checkbox.Group
                          style={{
                            width: "100%",
                          }}
                          onChange={onChange}
                        >
                          <Row gutter={[0, 12]}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                              <Checkbox
                                className="checkCreateProduct"
                                value="A"
                              >
                                Single room
                              </Checkbox>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                              <Checkbox
                                className="checkCreateProduct"
                                value="B"
                              >
                                Shared by two
                              </Checkbox>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                              <Checkbox
                                className="checkCreateProduct"
                                value="C"
                              >
                                Shared by Three
                              </Checkbox>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                              <Checkbox
                                className="checkCreateProduct"
                                value="D"
                              >
                                Shared by Four
                              </Checkbox>
                            </Col>
                          </Row>
                        </Checkbox.Group>
                      </div>

                      <p className="areaText roomsText">
                        Additional Information
                      </p>
                      <TextArea
                        className="inputCreateAd"
                        autoSize={{
                          minRows: 5,
                          maxRows: 5,
                        }}
                      />
                      <p className="inputText">
                        Give a brief description about what you are advertising
                      </p>
                    </div>
                    <div className="tabsSection">
                      <Tabs defaultActiveKey="1">
                        <Tabs.TabPane tab="Sell" key="1">
                          <p className="tabText">Sell on price</p>
                          <Input
                            placeholder="Price"
                            className="inputCreateAd tabInput"
                          />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Rent" key="2">
                          <p className="tabText">Monthly rentals</p>
                          <Input
                            placeholder="Price"
                            className="inputCreateAd tabInput"
                          />

                          <p className="tabText customtabText ">
                            Terms & Conditions
                          </p>
                          <TextArea
                            autoSize={{
                              minRows: 5,
                              maxRows: 5,
                            }}
                            placeholder="Type here"
                            className="inputCreateAd tabInput terms "
                          />
                        </Tabs.TabPane>
                      </Tabs>
                    </div>
                    <div className="shippingSection custombtnship">
                      <p className="shippingText">Shipping options</p>

                      <p className="offerText">Offer shipping</p>
                      <p className="shipingText">
                        The buyer will pay for shipping
                      </p>
                      <Link to="/PreviewAd">
                        <Button className="shipingButton previewBtn">
                          Preview ad
                        </Button>
                      </Link>
                      <Button className="shipingButton ">Post Ad</Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={10} lg={9} xl={8}>
                <div className="contentTwo">
                  <p className="adPreview">Ad Preview</p>
                  <div className="previewCont"></div>
                  <p className="adPreview">Title</p>
                  <p className="adPreview">Description</p>
                  <p className="adPreview">Price</p>
                </div>

                {/* <PreviewAd/> */}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
