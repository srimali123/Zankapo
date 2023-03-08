import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Images } from "../../../assets/Images/images.js";
import { Row, Col, Dropdown, Button, Divider } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import moment from "moment";
import { useNavigate } from "react-router-dom";

import { fetchProductByCategory } from "../../../Services/AdvertismentService.js";
import { Config } from "../../../Config/index.js";

import BuyProductHeader from "../buyProduct/buyProductHeader";
import Footer from "../../../components/footer/footer";
import { FLoader } from "../../../components/spinner.jsx";

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
  let jsonObj;
  const navigate = useNavigate();
  const { id, name } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fecthProducts = async () => {
    setIsLoading(true);
    const response = await fetchProductByCategory(id);
    if (response?.success) {
      setProducts(response?.data?.data);
      setIsLoading(false);
    } else {
      toast.error("check your internet connection");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fecthProducts();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <BuyProductHeader category={name} />
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
                </Row>
              </Col>
              <Col xs={24} sm={24} md={18} lg={16} xl={16}>
                <p className="serchTextSearch">"{name}"</p>
                <div className="searchItemContainer">
                  <div className="btnGroup">
                    <Row>
                      <Col xs={24} sm={24} md={10} lg={12} xl={12}>
                        <div className="btnGroupList">
                          <Button className="searchPageBtn">All Listing</Button>
                          <Button className="searchPageBtn auction">Auction</Button>
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
                                  trigger={["click"]}
                                  className="searchDropdown bestmatch"
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
                                  className="searchDropdown bestmatch"
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
                    {products?.length} results for {name}
                  </p>
                  {products?.map((item, idx) => {
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
