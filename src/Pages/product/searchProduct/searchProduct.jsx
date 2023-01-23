import React from "react";
import { Images } from "../../../assets/Images/images.js";
import { Row, Col, Dropdown, Button, Divider } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import BuyProductHeader from "../buyProduct/buyProductHeader";
import Footer from "../../../components/footer/footer";
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
export default function SearchProduct() {
  return (
    <div>
      <Row className="serchProductMainContainer">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <BuyProductHeader />
          <div className="searchProductMiddlContainer">
            <Row gutter={[10, 20]} className="itemsContainer">
              <Col
                xs={24}
                sm={24}
                md={6}
                lg={4}
                xl={4}
                className="dropdownSection"
              >
                <Row gutter={[0, 20]}>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div>
                      <Dropdown
                        trigger={["click"]}
                        className="createDrop"
                        menu={{
                          items,
                        }}
                      >
                        <a onClick={(e) => e.preventDefault()}>
                          All categories
                          <DownOutlined />
                        </a>
                      </Dropdown>
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div>
                      <Dropdown
                        trigger={["click"]}
                        className="createDrop"
                        menu={{
                          items,
                        }}
                      >
                        <a onClick={(e) => e.preventDefault()}>
                          Price
                          <DownOutlined />
                        </a>
                      </Dropdown>
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div>
                      <Dropdown
                        trigger={["click"]}
                        className="createDrop"
                        menu={{
                          items,
                        }}
                      >
                        <a onClick={(e) => e.preventDefault()}>
                          Condition
                          <DownOutlined />
                        </a>
                      </Dropdown>
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div>
                      <Dropdown
                        trigger={["click"]}
                        className="createDrop"
                        menu={{
                          items,
                        }}
                      >
                        <a onClick={(e) => e.preventDefault()}>
                          Type of listing
                          <DownOutlined />
                        </a>
                      </Dropdown>
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div>
                      <Dropdown
                        trigger={["click"]}
                        className="createDrop"
                        menu={{
                          items,
                        }}
                      >
                        <a onClick={(e) => e.preventDefault()}>
                          Type of seller
                          <DownOutlined />
                        </a>
                      </Dropdown>
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div>
                      <Dropdown
                        trigger={["click"]}
                        className="createDrop"
                        menu={{
                          items,
                        }}
                      >
                        <a onClick={(e) => e.preventDefault()}>
                          Shipping
                          <DownOutlined />
                        </a>
                      </Dropdown>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={18} lg={16} xl={16}>
                <p className="serchTextSearch">"Clothes"</p>
                <div className="searchItemContainer">
                  <div className="btnGroup">
                    <Row>
                      <Col xs={24} sm={24} md={10} lg={12} xl={12}>
                        <div className="btnGroupList" >
                          <Button className="searchPageBtn">All Listing</Button>
                          <Button className="searchPageBtn">Auction</Button>
                        </div>
                      </Col>
                      <Col xs={24} sm={24} md={14} lg={12} xl={12}>
                        <div className="btnDrop">
                          <Row gutter={30}>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="dropCol">
                              <div>
                                <Dropdown
                                  trigger={["click"]}
                                  className="searchDropdown"
                                  menu={{
                                    items,
                                  }}
                                >
                                  <a onClick={(e) => e.preventDefault()}>
                                    Condition
                                    <DownOutlined />
                                  </a>
                                </Dropdown>
                              </div>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="dropCol">
                              <div>
                                <Dropdown
                                  trigger={["click"]}
                                  className="searchDropdown"
                                  menu={{
                                    items,
                                  }}
                                >
                                  <a onClick={(e) => e.preventDefault()}>
                                    Best match
                                    <DownOutlined />
                                  </a>
                                </Dropdown>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <p className="searchTextSearch">
                    510,000+ results for headsets
                  </p>
                  <div className="cardSectionSearch">
                    <Row  className="cardRow">
                      <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <div>
                          <img
                            src={Images.common.ad2}
                            alt="searchImg"
                            className="searchImg"
                          />
                        </div>
                      </Col>
                      <Col xs={18} sm={18} md={18} lg={18} xl={18} className="detailsSectionCard">
                        <p className="searchItemTitle">
                          Apple AirPods 3rd Generation Wireless Charging Case -
                          Genuine Apple Very Good
                        </p>
                        <p className="productDetailSearch">
                          Refurbished Very Good Apple Airpods 3rd Generation
                          Wireless{" "}
                        </p>
                        <p className="priceText">K27,000</p>
                        <p className="searchTextSearch buyText">Buy it now</p>
                        <p className="searchTextSearch buyText valueText">
                          +K25.00 for delivery from lusaka
                        </p>
                      </Col>
                    </Row>
                    <Divider />
                  </div>
                  <div className="cardSectionSearch">
                    <Row  className="cardRow">
                      <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <div>
                          <img
                            src={Images.common.ad2}
                            alt="searchImg"
                            className="searchImg"
                          />
                        </div>
                      </Col>
                      <Col xs={18} sm={18} md={18} lg={18} xl={18} className="detailsSectionCard">
                        <p className="searchItemTitle">
                          Apple AirPods 3rd Generation Wireless Charging Case -
                          Genuine Apple Very Good
                        </p>
                        <p className="productDetailSearch">
                          Refurbished Very Good Apple Airpods 3rd Generation
                          Wireless{" "}
                        </p>
                        <p className="priceText">K27,000</p>
                        <p className="searchTextSearch buyText">Buy it now</p>
                        <p className="searchTextSearch buyText valueText">
                          +K25.00 for delivery from lusaka
                        </p>
                      </Col>
                    </Row>
                    <Divider />
                  </div>
                 
                </div>
              </Col>
              <Col xs={24} sm={24} md={0} lg={4} xl={4}>
                <div
                  className="advertisementContainer"
                  style={{
                    backgroundImage: `url(${Images.common.advertist})`,
                  }}
                ></div>
              </Col>
            </Row>
          </div>
        </Col>
        <Footer />
      </Row>
    </div>
  );
}
