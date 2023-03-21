import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Images } from "../../../assets/Images/images.js";
import { Row, Col, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import moment from "moment";
import { useNavigate } from "react-router-dom";

import { Config } from "../../../Config/index.js";

import BuyProductHeader from "../buyProduct/buyProductHeader";
import Footer from "../../../components/footer/footer";
import { FLoader } from "../../../components/spinner.jsx";
import { useSelector } from "react-redux";
import { conditions, bestMatch, priceRange } from "../../../Utils/Constants.js";

export default function CategorySearch() {
  let jsonObj;
  const navigate = useNavigate();
  const { text } = useParams();
  const { categories } = useSelector((state) => state.categories);
  const [isLoading, setIsLoading] = useState(false);
  const { searchData } = useSelector((state) => state.search);
  const [filterData, setFilterData] = useState([]);
  const [sortType, setShortType] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log("pppp", searchData);

  useEffect(() => {
    setFilterData(searchData);
  }, []);

  const items1 = conditions.map((item, idx) => {
    return {
      key: idx,
      label: (
        <a
          onClick={() => filterHandler(item.name, "condition")}
          rel="noopener noreferrer"
        >
          {item.name}
        </a>
      ),
    };
  });

  const items2 = bestMatch.map((item, idx) => {
    return {
      key: idx,
      label: (
        <a onClick={() => setShortType(item.name)} rel="noopener noreferrer">
          {item.name}
        </a>
      ),
    };
  });

  const items3 = priceRange.map((item, idx) => {
    return {
      key: idx,
      label: (
        <a onClick={() => setShortType(item.name)} rel="noopener noreferrer">
          {item.name}
        </a>
      ),
    };
  });

  const items4 = categories?.map((item, idx) => {
    return {
      key: idx,
      label: (
        <a
          onClick={() => filterHandler(item.id, "category")}
          rel="noopener noreferrer"
        >
          {item.category}
        </a>
      ),
    };
  });

  const filterHandler = (text, type) => {
    let suggetions;
    if (type === "condition") {
      suggetions = searchData.filter((value) => {
        return value.condition.toLowerCase().includes(text.toLowerCase());
      });
    } else if (type === "category") {
      console.log("cate");
      suggetions = searchData.filter((value) => {
        return value.category.includes(text);
      });
    }

    if (text === "") {
      setFilterData([]);
    } else {
      setFilterData(suggetions);
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
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div>
                      <Dropdown
                        trigger={["hover"]}
                        className="createDrop"
                        menu={{
                          items: items4,
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
                        trigger={["hover"]}
                        className="createDrop"
                        menu={{
                          items: items3,
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
                        trigger={["hover"]}
                        className="createDrop"
                        menu={{
                          items: items1,
                        }}
                      >
                        <a onClick={(e) => e.preventDefault()}>
                          Condition
                          <DownOutlined />
                        </a>
                      </Dropdown>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={18} lg={16} xl={16}>
                <p className="serchTextSearch">"{text}"</p>
                <div className="searchItemContainer">
                  <div className="btnGroup">
                    <Row>
                      <Col xs={24} sm={24} md={10} lg={12} xl={12}>
                        <div className="btnGroupList">
                          <Button
                            className="searchPageBtn"
                            onClick={() => setFilterData(searchData)}
                          >
                            All Listing
                          </Button>
                          <Button className="searchPageBtn auction ">
                            Auction
                          </Button>
                        </div>
                      </Col>
                      <Col xs={24} sm={24} md={14} lg={12} xl={12}>
                        <div className="btnDrop">
                          <Row gutter={40}>
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
                                  trigger={["hover"]}
                                  className="searchDropdown bestmatch"
                                  menu={{
                                    items: items1,
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
                                  trigger={["hover"]}
                                  className="searchDropdown bestmatch"
                                  menu={{
                                    items: items2,
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
                  {filterData
                    ?.sort((a, b) =>
                      sortType === "Newst"
                        ? new Date(b.created_at) - new Date(a.created_at)
                        : new Date(a.created_at) - new Date(b.created_at)
                    )
                    .map((item, idx) => {
                      jsonObj =
                        item.images.length !== 0 && JSON.parse(item?.images);
                      return (
                        <div className="cardSectionSearch" key={idx}>
                          <Row
                            className="cardRow"
                            onClick={() =>
                              navigate(
                                `/buyproduct/${item.id}/${item.category}`
                              )
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
                              <p className="priceText">
                                {" "}
                                {`K ${item?.buy
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                              </p>
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
