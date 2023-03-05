import React, { useEffect, useState } from "react";
import { Row, Col, Button, Input, Dropdown, Menu, Carousel } from "antd";
import Header from "../../components/header/header";
import DiscoverItem from "../../components/discoverItem";
import { Images } from "../../assets/Images/images.js";
import PopularAds from "../../components/popularAds";
import Card from "../../components/card";
import HowItsWork from "../../components/howItsWork";
import Footer from "../../components/footer/footer";
import { toast } from "react-toastify";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { FLoader, Loader } from "../../components/spinner";

import { clearAdvertisments } from "../../Redux/Slices/Advertisment";
import { useSelector, useDispatch } from "react-redux";
import { fetchAdvertisments } from "../../Redux/Slices/Advertisment/AdvertismentSlice";
import { fetchProperty } from "../../Redux/Slices/Property/PropertySlice";
import { clearProperty } from "../../Redux/Slices/Property";
import { Category } from "../../Utils/Constants";
import { Config } from "../../Config";
import { useNavigate } from "react-router-dom";
import { fetchCategories } from "../../Redux/Slices/Category/CategorySlice";
import { SearchComponent } from "../../components/search";
import PulseText from 'react-pulse-text';

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const onChange = (currentSlide) => {
  console.log(currentSlide);
};

let jsonObj;

export default function HomePage(props) {
  const [open, setOpen] = useState(false);
  const [next, setNext] = useState(4);
  const [isMoreLoading, setMoreLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { advertisments, isLoading, message, isError } = useSelector(
    (state) => state.advertisments
  );
  const { properties } = useSelector((state) => state.property);
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(fetchAdvertisments());
    dispatch(fetchProperty());
    dispatch(fetchCategories());
    return () => {
      dispatch(clearAdvertisments());
      dispatch(clearProperty());
    };
  }, [dispatch]);

  const items = categories?.map((item, idx) => {
    return {
      key: idx,
      label: (
        <a
          onClick={() => navigate(`category/${item.id}/${item.category}`)}
          rel="noopener noreferrer"
        >
          {item.category}
        </a>
      ),
    };
  });

  //see more
  const showMoreItems = async () => {
    setMoreLoading(true);
    setTimeout(() => {
      setNext((prevvalue) => prevvalue + 16);
      setMoreLoading(false);
    }, 1000);
  };

  //naviage to specific ad
  const onAdNavigateHandler = (id, category) => {
    navigate(`/buyproduct/${id}/${category}`);
  };

  const onNavigateToPrpertyHandler = (id) => {
    navigate(`/buyproperty/${id}`);
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
      <Row className="mainCont">
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={24}
          className="homeMaincontainer"
        >
          <Header />
          {/* banner section start */}
          <div
            className="banner"
            style={{
              backgroundImage: `url(${Images.common.banner})`,
            }}
          >
            <div className="centerContent">
              <img src={Images.common.orangeColorLogo} className="bannerLogo" />
              <PulseText text="  Sankapo is the largest open marketplace for Zambian buyers and
                sellers to list their products." duration={15000}>
              <p className="centerContentText" >
               
              </p>
              </PulseText>
             
              <div className="serchSection">
                <Row>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div>
                      <Dropdown
                        trigger={["click"]}
                        className="orangeSection"
                        menu={{
                          items,
                        }}
                      >
                        <a
                          onClick={(e) => e.preventDefault()}
                          className="searchCategoryText"
                        >
                          Category
                          <img
                            src={Images.common.down}
                            className="down"
                            onClick={(e) => e.preventDefault()}
                          />
                        </a>
                      </Dropdown>
                    </div>
                  </Col>
                </Row>

                <SearchComponent
                  advertisments={advertisments}
                  properties={properties}
                />
              </div>
            </div>
          </div>
          <div className="blueconatainer">
            <p className="blueContText">Secure payment</p>
            <p className="blueContText">Verified sellers</p>
            <p className="blueContText">Thousands of goods</p>
          </div>

          {/* banner section end */}
          <div className="middlecontainer">
            {/* discover categories */}
            <p className="discoverItemText">Discover our categories</p>
            <Row gutter={0}>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Row gutter={[30, 64]}>
                  {categories?.slice(0, 8).map((item, idx) => {
                    return (
                      <Col xs={6} sm={6} md={6} lg={6} xl={3}>
                        <DiscoverItem
                          image={`${Config.API_BASE_URL}uploads/icons/${item.icon}`}
                          link={item.category}
                          // style={{ marginRight: 25 }}
                          onClick={() =>
                            navigate(`category/${item.id}/${item.category}`)
                          }
                        />
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Row>
            {/* popular adds */}{" "}
            <p className="discoverItemText secondSectionText spinnerCont">
              Popular ads now
            </p>
            <Row gutter={0} className="addSection">
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Row gutter={[20, 10]}>
                  {/* {advertisments ? (
              advertisments
                ?.slice(0, next)
                .sort((a, b) =>
                  a.title
                    .toLowerCase()
                    .localeCompare(b.title.toLowerCase())
                )
                .map((item, key) => {
                  jsonObj =
                    item.images.length !== 0 && JSON.parse(item?.images);
                  return (
                    <Col key={key} xs={12} sm={12} md={8} lg={6} xl={6}>
                      <PopularAds
                        image={`${Config.API_BASE_URL}uploads/images/${jsonObj[0]}`}
                        description={item.title}
                        price={`K${item.buy}`}
                        onAdNavigateHandler={() =>
                          onAdNavigateHandler(item.id)
                        }
                      />
                    </Col>
                  );
                })
            ) : ( */}
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        width: "100%",
                        alignItems: "center",
                      }}
                    >
                      <img src={Images.common.noData} className="noDataImg" />
                      <p className="nodataText">No Result Found!</p>
                    </div>
                  </Col>
                  {/* )} */}
                </Row>
              </Col>
              {/* {advertisments?.length > next &&
          (isMoreLoading ? (
            <Loader
              loading={isMoreLoading}
              color="rgba(249, 143, 33, 1)"
            />
          ) : (
            <Button className="seeMoreBtn" onClick={showMoreItems}>
              See More
              <img src={Images.common.forward} className="forwardIcon" />
            </Button>
          ))} */}
            </Row>
            <div></div>
            {/* recently add */}
            <p className="discoverItemText secondSectionText thirdsectionText spinnerCont">
              Recently added
            </p>
            <Row gutter={0} className="addSection">
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Row gutter={[20, 10]}>
                  {advertisments ? (
                    advertisments?.slice(0, next).map((item, key) => {
                      jsonObj =
                        item.images.length !== 0 && JSON.parse(item?.images);
                      return (
                        <Col key={key} xs={12} sm={12} md={8} lg={6} xl={6}>
                          <PopularAds
                            image={`${Config.API_BASE_URL}uploads/products/${jsonObj[0]}`}
                            description={item.title}
                            price={`K${item.buy}`}
                            onAdNavigateHandler={() =>
                              onAdNavigateHandler(item.id, item.category)
                            }
                          />
                        </Col>
                      );
                    })
                  ) : (
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          width: "100%",
                          alignItems: "center",
                        }}
                      >
                        <img src={Images.common.noData} className="noDataImg" />
                        <p className="nodataText">No Result Found!</p>
                      </div>
                    </Col>
                  )}
                </Row>
              </Col>
              {advertisments?.length > next && (
                <Button className="seeMoreBtn" onClick={showMoreItems}>
                  {isMoreLoading ? (
                    <FLoader loading={isMoreLoading} color="#ffff" size={5} />
                  ) : (
                    <>
                      {"See More"}
                      <img
                        src={Images.common.forward}
                        className="forwardIcon"
                      />
                    </>
                  )}
                </Button>
              )}
            </Row>
            {/*  Houses for rent */}
            <p className="discoverItemText secondSectionText thirdsectionText spinnerCont">
              Houses for rent
            </p>
            <Row gutter={0} className="addSection">
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Row gutter={[20, 10]}>
                  {properties ? (
                    properties?.slice(0, next).map((item, key) => {
                      jsonObj =
                        item.images.length !== 0 && JSON.parse(item?.images);
                      return (
                        <Col key={key} xs={12} sm={12} md={8} lg={6} xl={6}>
                          <PopularAds
                            image={`${Config.API_BASE_URL}/uploads/properties/${jsonObj[0]}`}
                            description={item.tittle}
                            price={`K${item.buy}`}
                            onAdNavigateHandler={() =>
                              onNavigateToPrpertyHandler(item.id)
                            }
                          />
                        </Col>
                      );
                    })
                  ) : (
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          width: "100%",
                          alignItems: "center",
                        }}
                      >
                        <img src={Images.common.noData} className="noDataImg" />
                        <p className="nodataText">No Result Found!</p>
                      </div>
                    </Col>
                  )}
                </Row>
              </Col>
              {properties?.length > next && (
                <Button className="seeMoreBtn" onClick={showMoreItems}>
                  {isMoreLoading ? (
                    <FLoader loading={isMoreLoading} color="#ffff" size={5} />
                  ) : (
                    <>
                      {"See More"}
                      <img
                        src={Images.common.forward}
                        className="forwardIcon"
                      />
                    </>
                  )}
                </Button>
              )}
            </Row>
            {/* how its work */}
            {/* <div className="howItsWorkWeb">
              <p className="discoverItemText secondSectionText thirdsectionText">
                how it works
              </p>
              <Row gutter={0} className="addSection trendingSection howItsWork">
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Row gutter={[20, 50]}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                      <HowItsWork
                        image={Images.common.ad2}
                        title={"How to buy"}
                      />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                      <HowItsWork
                        image={Images.common.ad2}
                        title={"How to post Ads"}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div> */}
            {/* how its work end */}
            {/* how its work mobile */}
            {/* <div className="howItsWorkMobile">
              <p className="discoverItemText secondSectionText thirdsectionText">
                how it works
              </p>
              <Row gutter={0} className="addSection trendingSection howItsWork">
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Row>
                    <Carousel swipeToSlide draggable afterChange={onChange}>
                      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <HowItsWork
                          image={Images.common.ad2}
                          title={"How to buy"}
                        />
                      </Col>
                      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <HowItsWork
                          image={Images.common.ad2}
                          title={"How to post Ads"}
                        />
                      </Col>
                    </Carousel>
                  </Row>
                </Col>
              </Row>
            </div> */}
            {/* how its work mobile end */}
            {/* This is trending web*/}
            {/* <div className="thisIsTrendingWeb">
        <p className="discoverItemText secondSectionText thirdsectionText">
          This is Trending
        </p>
        <Row gutter={0} className="addSection trendingSection">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Row gutter={[10, 50]}>
              <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                <Card image={Images.common.ad2} title={"Wrist watches"} />
              </Col>
              <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                <Card image={Images.common.ad2} title={"Salaula shoes"} />
              </Col>
              <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                <Card image={Images.common.ad2} title={"Home Goods"} />
              </Col>
            </Row>
          </Col>
        </Row>
      </div> */}
            {/* <div className="thisIsTrendingMobile">
        <p className="discoverItemText secondSectionText thirdsectionText">
          This is Trending
        </p>
        <Row gutter={0} className="addSection trendingSection">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Row gutter={[10, 50]}>
              <Carousel swipeToSlide draggable afterChange={onChange}>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                  <Card
                    image={Images.common.ad2}
                    title={"Wrist watches"}
                  />
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                  <Card
                    image={Images.common.ad2}
                    title={"Salaula shoes"}
                  />
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                  <Card image={Images.common.ad2} title={"Home Goods"} />
                </Col>
              </Carousel>
            </Row>
          </Col>
        </Row>
      </div> */}
          </div>
          <Footer />
        </Col>
      </Row>
    </div>
  );
}
