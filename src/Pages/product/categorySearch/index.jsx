import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Images } from "../../../assets/Images/images.js";
import { Row, Col, Dropdown, Button, Divider } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import moment from "moment";
import { useNavigate } from "react-router-dom";

import { Config } from "../../../Config/index.js";

import BuyProductHeader from "../buyProduct/buyProductHeader";
import Footer from "../../../components/footer/footer";
import { FLoader } from "../../../components/spinner.jsx";
import { useSelector } from "react-redux";
import { conditions } from "../../../Utils/Constants.js";

export default function CategorySearch() {
  let jsonObj;
  const navigate = useNavigate();
  const { text } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const { searchData } = useSelector((state) => state.search);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setFilterData(searchData);
  }, []);

  const items = conditions.map((item, idx) => {
    return {
      key: idx,
      label: (
        <a onClick={() => filterHandler(item.name)} rel="noopener noreferrer">
          {item.name}
        </a>
      ),
    };
  });

  const filterHandler = (text) => {
    const suggetions = searchData.filter((value) => {
      return value.condition.toLowerCase().includes(text.toLowerCase());
    });

    if (text === "") {
      setFilterData([]);
    } else {
      setFilterData(suggetions);
      console.log(suggetions);
    }
  };

  if (isLoading) {
    return (
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          height: "100vh",
        }}
      >
        <FLoader isLoading={true} color={"#F98F21"} />
      </div>
    );
  }

  return (
    <div>
      <Row className="serchProductMainContainer">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <BuyProductHeader category={"search result"} />
          <div className="grayTab"></div>
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
                  {/* <Col xs={24} sm={24} md={24} lg={24} xl={24}>
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
                  </Col> */}
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
                  {/* <Col xs={24} sm={24} md={24} lg={24} xl={24}>
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
                  </Col> */}
                  {/* <Col xs={24} sm={24} md={24} lg={24} xl={24}>
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
                  </Col> */}
                  {/* <Col xs={24} sm={24} md={24} lg={24} xl={24}>
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
                  </Col> */}
                </Row>
              </Col>
              <Col xs={24} sm={24} md={18} lg={16} xl={16}>
                <p className="serchTextSearch">"{text}"</p>
                <div className="searchItemContainer">
                  <div className="btnGroup">
                    <Row>
                      <Col xs={24} sm={24} md={10} lg={12} xl={12}>
                        <div className="btnGroupList">
                          <Button className="searchPageBtn">All Listing</Button>
                          <Button className="searchPageBtn">Auction</Button>
                        </div>
                      </Col>
                      <Col xs={24} sm={24} md={14} lg={12} xl={12}>
                        <div className="btnDrop">
                          <Row gutter={30}>
                            <Col
                              xs={12}
                              sm={12}
                              md={12}
                              lg={12}
                              xl={12}
                              className="dropCol"
                            >
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
                            <Col
                              xs={12}
                              sm={12}
                              md={12}
                              lg={12}
                              xl={12}
                              className="dropCol"
                            >
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
                    Results {filterData?.length} listings
                  </p>
                  {filterData?.map((item, idx) => {
                    jsonObj =
                      item.images.length !== 0 && JSON.parse(item?.images);
                    return (
                      <div className="cardSectionSearch" key={idx}>
                        <Row
                          className="cardRow"
                          onClick={() =>
                            navigate(`/buyproduct/${item.id}/${item.category}`)
                          }
                        >
                          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <div>
                              <img
                                src={`${Config.API_BASE_URL}uploads/products/${jsonObj[0]}`}
                                alt="searchImg"
                                className="searchImg"
                              />
                            </div>
                          </Col>
                          <Col
                            xs={18}
                            sm={18}
                            md={18}
                            lg={18}
                            xl={18}
                            className="detailsSectionCard"
                          >
                            <p className="searchItemTitle">{item.title}</p>
                            <p className="productDetailSearch">
                              {item.description}
                            </p>
                            <p className="priceText">K{item.buy}</p>
                            <p className="searchTextSearch buyText">
                              {moment(item.created_at).fromNow()}
                            </p>
                            <p className="searchTextSearch buyText valueText">
                              {item.condition}
                            </p>
                            <p className="searchTextSearch buyText valueText">
                              {item.town}
                            </p>
                          </Col>
                        </Row>
                        <Divider />
                      </div>
                    );
                  })}
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
