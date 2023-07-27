import React, { useEffect, useState, lazy } from "react";
import { Row, Col, Button, Dropdown } from "antd";
import Header from "../../components/header/header";
import DiscoverItem from "../../components/discoverItem";
import { Images } from "../../assets/Images/images.js";
import PopularAds from "../../components/popularAds";
import Card from "../../components/card";
import HowItsWork from "../../components/howItsWork";
import Footer from "../../components/footer/footer";
import { toast } from "react-toastify";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { FLoader } from "../../components/spinner";
import "react-dropdown/style.css";
import { clearAdvertisments } from "../../Redux/Slices/Advertisment";
import { useSelector, useDispatch } from "react-redux";
import { fetchAdvertisments } from "../../Redux/Slices/Advertisment/AdvertismentSlice";
import { fetchProperty } from "../../Redux/Slices/Property/PropertySlice";
import { clearProperty } from "../../Redux/Slices/Property";
import { Config } from "../../Config";
import { useNavigate } from "react-router-dom";
import { fetchCategories } from "../../Redux/Slices/Category/CategorySlice";
import { SearchComponent } from "../../components/search";
import PulseText from "react-pulse-text";
import moment from "moment";
import { BeatLoader } from "react-spinners";

import { getBanner } from "../../Services/AdvertismentService";

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const options = ["one", "two", "three"];
const defaultOption = options[0];
const onChange = (currentSlide) => {
  console.log(currentSlide);
};

let jsonObj;

export default function HomePage(props) {
  const [open, setOpen] = useState(false);
  const [next, setNext] = useState(8);
  const [isMoreLoading, setMoreLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { advertisments, isLoading, message, isError } = useSelector(
    (state) => state.advertisments
  );
  const { properties } = useSelector((state) => state.property);
  const { categories } = useSelector((state) => state.categories);

  const [banner, setBanner] = useState("");

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

  useEffect(() => {
    const getBannerAds = async () => {
      const response = await getBanner();
      setBanner(response?.data?.data[0].bannerImage);
    };
    getBannerAds();
  }, []);

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
      setNext((prevvalue) => prevvalue + 8);
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

  const latestAds = Object.values(advertisments)?.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });

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
        <FLoader isLoading={true} color={"#36d7b7"} />
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
              <div className="centerTextContentContainer">
                <PulseText
                  text="  Sankapo is the largest open marketplace for Zambian buyers and
                sellers to list their products."
                  duration={15000}
                >
                  <p className="centerContentText"></p>
                </PulseText>
              </div>

              <div className="serchSection">
                <Row>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div>
                      <Dropdown
                        className="orangeSection"
                        menu={{
                          items,
                        }}
                        placement="bottom"
                      >
                        <a className="searchCategoryText">
                          Category
                          <img src={Images.common.down} className="down" />
                        </a>
                      </Dropdown>
                    </div>
                  </Col>
                </Row>

                <SearchComponent
                  advertisments={advertisments}
                  properties={properties}
                  positionHome={true}
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
            {/* <p className="discoverItemText secondSectionText spinnerCont">
              Popular ads now
            </p> */}
            <Row gutter={0} className="addSection">
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                {/* <Row gutter={[20, 10]}>
                  {advertisments
                    ?.slice(0, next)
                    .sort((a, b) =>
                      a.title.toLowerCase().localeCompare(b.title.toLowerCase())
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
                    })}
                </Row> */}
              </Col>
            </Row>
            <div></div>
            {/* recently add */}
            <p className="discoverItemText secondSectionText  spinnerCont">
              Recently added
            </p>
            <Row gutter={0} className="addSection">
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Row gutter={[40, 10]}>
                  {advertisments ? (
                    latestAds?.slice(0, next).map((item, key) => {
                      jsonObj =
                        item.images.length !== 0 && JSON.parse(item?.images);
                      return (
                        <Col key={key} xs={12} sm={12} md={8} lg={6} xl={6}>
                          <PopularAds
                            image={`${Config.API_BASE_URL}uploads/products/${jsonObj[0]}`}
                            description={item.title}
                            price={item.buy}
                            location={item.province + ", " + item.town}
                            timestamp={moment(item?.created_at).fromNow()}
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
                        <p className="nodataText">No Result Found!</p>
                      </div>
                    </Col>
                  )}
                </Row>
              </Col>
              {advertisments?.length > next && (
                <Button className="seeMoreBtn" onClick={showMoreItems}>
                  {isMoreLoading ? (
                    <BeatLoader
                      loading={isMoreLoading}
                      color="#ffff"
                      size={10}
                    />
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
                            price={item.buy}
                            location={item.province + ", " + item.town}
                            timestamp={moment(item?.created_at).fromNow()}
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
                          width: "100%",
                          alignItems: "center",
                        }}
                      >
                        <p className="nodataText">
                          We did not find any result in Property!
                        </p>
                      </div>
                    </Col>
                  )}
                </Row>
              </Col>
              {properties?.length > next && (
                <Button className="seeMoreBtn" onClick={showMoreItems}>
                  {isMoreLoading ? (
                    <BeatLoader
                      loading={isMoreLoading}
                      color="#ffff"
                      size={10}
                    />
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
            {/* sponsored ad */}
            <Row>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <div
                  className="sponContainer"
                  style={{
                    backgroundImage: `url(${Config.API_BASE_URL}uploads/banners/${banner})`,
                  }}
                >
                  <div className="adcont">Sponsored ads</div>
                </div>
              </Col>
            </Row>
          </div>
          <Footer />
        </Col>
      </Row>
    </div>
  );
}
