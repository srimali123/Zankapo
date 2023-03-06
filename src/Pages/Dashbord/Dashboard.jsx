import React, { useEffect, useState } from "react";
import { Images } from "../../assets/Images/images";
import { Row, Col, Dropdown, Button, Divider, Input, DatePicker } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { getMyProducts, getMyProperty } from "../../Services/UserService";
import { Config } from "../../Config";
import { toast } from "react-toastify";

export default function Dashboard() {
  let jsonObj;
  const { user } = useSelector((state) => state.user);
  const [products, setProducts] = useState([]);
  const [property, setProperty] = useState([]);
  const [activePane, setActivePane] = useState(1);

  useEffect(() => {
    getMyProductsList();
    getMyPropertyList();
  }, []);

  const getMyProductsList = async () => {
    const response = await getMyProducts(user?.id);
    if (response?.success) {
      setProducts(response?.data?.data);
    } else {
      toast.error("something went wrong");
    }
  };

  const getMyPropertyList = async () => {
    const response = await getMyProperty(user?.id);
    if (response?.success) {
      setProperty(response?.data?.data);
    } else {
      toast.error("something went wrong");
    }
  };

  const changeActivePane = (number) => {
    if (number === 1) {
      setActivePane(1);
    } else if (number === 2) {
      setActivePane(2);
    } else if (number === 3) {
      setActivePane(3);
    } else {
      setActivePane(4);
    }
  };

  return (
    <div className="dashMainContainer">
      <Row className="dashMainHeaderContainer">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className="tabSection"></div>
        </Col>
      </Row>

      <Row className="tabContainer ">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Tabs defaultActiveKey="1">
            <div className="tabSection">
              <TabList>
                <Tab className="tabPane titletab" key={1}>
                  My Listings
                </Tab>
                <Tab className="tabPane titletab" key={2}>
                  My profile
                </Tab>
                <Tab className="tabPane titletab" key={3}>
                  Notifications
                </Tab>
              </TabList>
            </div>

            <div>
              {/* <TabPanel className="tabPanelSection">
                <h2>sales</h2>
              </TabPanel> */}

              <TabPanel className="tabPanelSection">
                <Row gutter={[0, 20]}>
                  <Col
                    xs={24}
                    sm={24}
                    md={7}
                    lg={4}
                    xl={4}
                    className="listNavLinks"
                  >
                    <div
                      className="listingBox"
                      onClick={() => changeActivePane(1)}
                    >
                      <Link className="linkList">All listing</Link>
                      <p className="countList">{products?.length} items</p>
                    </div>

                    <div
                      className="listingBox"
                      onClick={() => changeActivePane(2)}
                    >
                      <Link className="linkList">Active listing</Link>
                      <p className="countList">
                        {
                          products?.filter((item) => item.isApprove === "1")
                            .length
                        }{" "}
                        items
                      </p>
                    </div>

                    <div
                      className="listingBox"
                      nClick={() => changeActivePane(3)}
                    >
                      <Link className="linkList">Pending listing</Link>
                      <p className="countList">
                        {
                          products?.filter((item) => item.isApprove === "0")
                            .length
                        }{" "}
                        items
                      </p>
                    </div>

                    <div
                      className="listingBox"
                      nClick={() => changeActivePane(4)}
                    >
                      <Link className="linkList">expired listing</Link>
                      <p className="countList">0 items</p>
                    </div>
                  </Col>
                  <Col
                    xs={24}
                    sm={24}
                    md={15}
                    lg={19}
                    xl={19}
                    className="cardListingContainer"
                  >
                    {activePane === 1 ? (
                      products?.map((item, idx) => {
                        jsonObj =
                          item.images.length !== 0 && JSON.parse(item?.images);
                        return (
                          <div className="cardSectionSearch" key={idx}>
                            <Row className="cardRow" gutter={20}>
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
                                <Link>
                                  <img
                                    src={Images.common.dotButtton}
                                    alt="dotmenu"
                                    className="dotmenu"
                                  />
                                </Link>
                                <p className="searchItemTitle">{item?.title}</p>
                                <p className="productDetailSearch">
                                  {item?.description}
                                </p>
                                <p className="priceText">K{item?.buy}</p>

                                <p className="searchTextSearch buyText valueText">
                                  {item?.province}
                                </p>
                                <p className="searchTextSearch buyText valueText">
                                  {item?.town}
                                </p>
                              </Col>
                            </Row>
                          </div>
                        );
                      })
                    ) : activePane === 2 ? (
                      products
                        ?.filter((item) => item.isApprove === "1")
                        .map((item, idx) => {
                          jsonObj =
                            item.images.length !== 0 &&
                            JSON.parse(item?.images);
                          return (
                            <div className="cardSectionSearch" key={idx}>
                              <Row className="cardRow" gutter={20}>
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
                                  <Link>
                                    <img
                                      src={Images.common.dotButtton}
                                      alt="dotmenu"
                                      className="dotmenu"
                                    />
                                  </Link>
                                  <p className="searchItemTitle">
                                    {item?.title}
                                  </p>
                                  <p className="productDetailSearch">
                                    {item?.description}
                                  </p>
                                  <p className="priceText">K{item?.buy}</p>

                                  <p className="searchTextSearch buyText valueText">
                                    {item?.province}
                                  </p>
                                  <p className="searchTextSearch buyText valueText">
                                    {item?.town}
                                  </p>
                                </Col>
                              </Row>
                            </div>
                          );
                        })
                    ) : activePane === 3 ? (
                      products
                        ?.filter((item) => item.isApprove === 0)
                        .map((item, idx) => {
                          jsonObj =
                            item.images.length !== 0 &&
                            JSON.parse(item?.images);
                          return (
                            <div className="cardSectionSearch" key={idx}>
                              <Row className="cardRow" gutter={20}>
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
                                  <Link>
                                    <img
                                      src={Images.common.dotButtton}
                                      alt="dotmenu"
                                      className="dotmenu"
                                    />
                                  </Link>
                                  <p className="searchItemTitle">
                                    {item?.title}
                                  </p>
                                  <p className="productDetailSearch">
                                    {item?.description}
                                  </p>
                                  <p className="priceText">K{item?.buy}</p>

                                  <p className="searchTextSearch buyText valueText">
                                    {item?.province}
                                  </p>
                                  <p className="searchTextSearch buyText valueText">
                                    {item?.town}
                                  </p>
                                </Col>
                              </Row>
                            </div>
                          );
                        })
                    ) : (
                      <></>
                    )}
                  </Col>
                </Row>
              </TabPanel>

              <TabPanel className="tabPanelSection tabPanelsectionProfile">
                <Row gutter={[0, 20]}>
                  <Col
                    xs={24}
                    sm={24}
                    md={6}
                    lg={5}
                    xl={4}
                    className="listNavLinks profilelink"
                  >
                    <div className="listingBox">
                      <Link className="linkList">Personal details</Link>
                      <p className="countList">0 items</p>
                    </div>

                    {/* <div className="listingBox">
                      <Link className="linkList">Change password</Link>
                      <p className="countList">0 items</p>
                    </div> */}
                  </Col>
                  {/* personal details container */}
                  <Col
                    xs={24}
                    sm={24}
                    md={17}
                    lg={15}
                    xl={15}
                    className="cardListingContainer profileCont"
                  >
                    <p className="profileLabel">Name</p>
                    <Input
                      placeholder="Enter your name"
                      className="profileInput"
                      value={user?.fullname}
                      disabled
                    />

                    <p className="profileLabel secondLabel">Phone number</p>
                    <Input
                      placeholder="Enter your mobile number"
                      className="profileInput"
                      value={user?.phonenumber}
                      disabled
                    />

                    <p className="profileLabel secondLabel">NRC Number</p>
                    <Input
                      placeholder="Enter your NRC Number"
                      className="profileInput"
                      value={user?.nrc}
                      disabled
                    />

                    <p className="profileLabel secondLabel">Email</p>
                    <Input
                      placeholder="Enter your Email"
                      className="profileInput"
                      value={user?.email}
                      disabled
                    />

                    <p className="profileLabel secondLabel">Date Of Birth</p>
                    <Input
                      // onChange={onChange}
                      placeholder="Select"
                      className="profileInput"
                      name="dob"
                      value={user?.dob}
                      disabled
                    />

                    <p className="profileLabel secondLabel">Province</p>
                    <Row>
                      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        {/* <Dropdown
                          trigger={["click"]}
                          placeholder="Province"
                          className="dropdownProvince emailInput"
                          menu={{
                            items,
                          }}
                        >
                          <a onClick={(e) => e.preventDefault()}>
                            Province
                            <DownOutlined />
                          </a>
                        </Dropdown> */}
                        <Input
                          // onChange={onChange}
                          placeholder="Province"
                          className="profileInput"
                          name="dob"
                          value={user?.province}
                          disabled
                        />
                      </Col>
                    </Row>

                    <Row gutter={5}>
                      <Col xs={24} sm={24} md={12} lg={9} xl={6}>
                        <p className="profileLabel secondLabel">City*</p>
                        <Input
                          placeholder="City"
                          className="profileInput provinceinput"
                          name="city"
                          value={user?.city}
                          disabled
                        />
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={9} xl={6}>
                        <p className="profileLabel secondLabel ">Town*</p>
                        <Input
                          placeholder="Town"
                          className="profileInput provinceinput towninput"
                          name="town"
                          value={user?.town}
                          disabled
                        />
                      </Col>
                    </Row>
                  </Col>

                  {/* change password container */}
                  {/* <Col
                    xs={24}
                    sm={24}
                    md={17}
                    lg={15}
                    xl={15}
                    className="cardListingContainer profileCont"
                  >
                    <p className="profileLabel">Current password</p>
                    <Input
                      placeholder="old password"
                      className="profileInput"
                    />

                    <p className="profileLabel secondLabel">New password</p>
                    <Input
                      placeholder="New passowrd"
                      className="profileInput"
                    />

                    <p className="profileLabel secondLabel">
                      Repeat new password
                    </p>
                    <Input
                      placeholder="Repeat password"
                      className="profileInput"
                    />

                    <Button className="saveBtnPassword">Save</Button>
                  </Col> */}
                </Row>
              </TabPanel>

              <TabPanel>
                <p> No notifictions</p>
              </TabPanel>
            </div>
          </Tabs>
        </Col>
      </Row>
      <Row className="footercol">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Footer />
        </Col>
      </Row>
    </div>
  );
}
