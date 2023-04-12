import React, { useEffect, useState } from "react";
import { Images } from "../../../assets/Images/images.js";
import { Row, Col, Button, Input, Divider, Checkbox, Carousel } from "antd";
import { Link, useParams } from "react-router-dom";
import BuyProductHeader from "../buyProduct/buyProductHeader";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import Footer from "../../../components/footer/footer.jsx";
import { toast } from "react-toastify";

import { clearProperty } from "../../../Redux/Slices/Property";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProperty } from "../../../Redux/Slices/Property/PropertySlice";
import { fetchCategories } from "../../../Redux/Slices/Category/CategorySlice";
import { Config } from "../../../Config/index";
import moment from "moment";

import PopularAds from "../../../components/popularAds.jsx";
import { FLoader } from "../../../components/spinner.jsx";
const onChange = (checkedValues) => {
  console.log("checked = ", checkedValues);
};

export default function BuyProperty() {
  const { id, category } = useParams();
  const [showPhone, setShowPhone] = useState(false);
  const [open, setOpen] = useState(false);
  const [jsonObj, setJsonObject] = useState({});
  const dispatch = useDispatch();
  const { property, isLoading, message, isError } = useSelector(
    (state) => state.property
  );

  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(fetchSingleProperty(id));
    dispatch(fetchCategories());
    return () => {
      dispatch(clearProperty());
    };
  }, [dispatch]);

  useEffect(() => {
    onloadImage();
  }, [jsonObj]);

  const onloadImage = () => {
    let url = Config.API_BASE_URL;
    if (property?.images.length !== 0) {
      let jsonObj = JSON.parse(property?.images);
      setJsonObject(jsonObj);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  Array.from(jsonObj).map((item, index) => {
    console.log(item);
  });

  const onSendMessage = (mobile) => {
    if (isAuthenticated) {
      window.location = `https://api.whatsapp.com/send?phone=${mobile}`;
    } else {
      toast.error(
        "Login to send your message and keep track of it in your account."
      );
    }
  };

  const phoneNumberShow = () => {
    if (isAuthenticated) {
      setShowPhone((prev) => !prev);
    } else {
      toast.error(
        "Login to show phone number and keep track of it in your account."
      );
    }
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  if (property?.images.length === 0) {
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
      <Row className="mainProductConatainer">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <BuyProductHeader category={""} />
          <div className="middleContainerProduct">
            <Row gutter={[20, 20]}>
              <Col xs={24} sm={24} md={24} lg={18} xl={18}>
                <div className="productContainerMain">
                  <Row gutter={[30, 0]}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <div className="buyProductCarousel">
                        <Row
                          gutter={0}
                          className="addSection trendingSection howItsWork"
                        >
                          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Row>
                              <Carousel
                                swipeToSlide
                                draggable
                                afterChange={onChange}
                              >
                                {property?.images.length !== 0
                                  ? Array.from(
                                      JSON.parse(property?.images)
                                    ).map((item, key) => {
                                      return (
                                        <Col
                                          xs={24}
                                          sm={24}
                                          md={24}
                                          lg={24}
                                          xl={24}
                                          key={key}
                                        >
                                          <img
                                            src={`${Config.API_BASE_URL}uploads/properties/${item}`}
                                            className="posterCon"
                                            alt="ad-img"
                                          />
                                        </Col>
                                      );
                                    })
                                  : null}
                              </Carousel>
                            </Row>
                          </Col>
                        </Row>
                      </div>

                      <Divider />
                      <div className="stopWebContent">
                        <div className="stopContiner">
                          <img
                            src={Images.common.stopWatch}
                            className="stopWatch"
                          />
                          <p className="stopText">
                            Posted {moment(property?.created_at).fromNow()}
                          </p>
                        </div>

                        <div className="stopContiner">
                          <img
                            src={Images.common.locationNew}
                            className="stopWatch"
                          />
                          <p className="stopText">{property?.town}</p>
                        </div>
                        <p className="posterText">{property?.tittle}</p>
                        <div className="priceDetail">
                          <div>
                            {" "}
                            <p className="priceText">Price:</p>
                          </div>

                          <div className="priceDetailText">
                            <p className="priceNew">
                              {`K${property?.buy}`}
                              <br />
                            </p>
                          </div>
                        </div>

                        <Divider />
                        <div className="priceContainner">
                          <Row gutter={[0, 30]}>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                              <p className="sellerDetails">About the seller</p>
                              <p className="sellerName">
                                {property?.sellerName}
                              </p>
                              <p className="conditonSubText">
                                {property?.province}, Zambia
                              </p>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                              <div className="btnContainer">
                                <Button
                                  className="orangeBtnBuy"
                                  onClick={() =>
                                    onSendMessage(property?.mobile)
                                  }
                                >
                                  <img
                                    src={Images.common.message}
                                    alt="message"
                                    className="messageIcon"
                                  />
                                  Send Message
                                </Button>
                                <Button
                                  className="orangeBtnBuy"
                                  onClick={phoneNumberShow}
                                >
                                  <img
                                    src={Images.common.mobile}
                                    alt="mobile"
                                    className="messageIcon"
                                  />

                                  {showPhone ? (
                                    <a
                                      style={{ color: "#6E7191" }}
                                      onClick={() => {
                                        window.location.href = `tel:${property?.mobile}`;
                                      }}
                                    />
                                  ) : (
                                    " Show phone no"
                                  )}
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <Divider />

                        <p className="descripText">Description</p>
                        <Link>
                          <div className="btnUsed">
                            {property?.isRentOrSale}
                          </div>
                        </Link>
                        <p className="context">{property?.additional_info}</p>
                      </div>

                      <p className="descripText">Attributes</p>
                      <Row>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                          <p className="AttributesHead">
                            Residential Type :{" "}
                            <span className="attributesValue">
                              {property?.residential_type}
                            </span>
                          </p>
                          <p className="AttributesHead">
                            Number Of Rooms :{" "}
                            <span className="attributesValue">
                              {property?.number_of_rooms}
                            </span>
                          </p>
                          <p className="AttributesHead">
                            Electricity :{" "}
                            <span className="attributesValue">
                              {property?.electricity}
                            </span>
                          </p>
                          <p className="AttributesHead">
                            Security :{" "}
                            <span className="attributesValue">
                              {property?.security}
                            </span>
                          </p>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                          <p className="AttributesHead">
                            Living Area :{" "}
                            <span className="attributesValue">
                              {property?.living_area_square_meters}
                            </span>
                          </p>
                          <p className="AttributesHead">
                            Running Water :{" "}
                            <span className="attributesValue">
                              {property?.running_water}
                            </span>
                          </p>
                          <p className="AttributesHead">
                            Rest Room :{" "}
                            <span className="attributesValue">
                              {property?.restroom}
                            </span>
                          </p>
                          <p className="AttributesHead">
                            Room Arrangement :{" "}
                            <span className="attributesValue">
                              {property?.room_arrangement}
                            </span>
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>

                {/* <Row className="serchRow ">
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <p className="serchText">Similar searches</p>
                    <Row gutter={[20, 20]}>
                      <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                        <PopularAds
                          image={Images.populaAd.ad1}
                          description={
                            "Play station 5 console With all accesories"
                          }
                          price={"K27,000"}
                        />
                      </Col>

                      <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                        <PopularAds
                          image={Images.populaAd.ad1}
                          description={
                            "Play station 5 console With all accesories"
                          }
                          price={"K27,000"}
                        />
                      </Col>
                      <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                        <PopularAds
                          image={Images.populaAd.ad1}
                          description={
                            "Play station 5 console With all accesories"
                          }
                          price={"K27,000"}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row> */}
              </Col>
              <Col xs={24} sm={24} md={0} lg={6} xl={6}>
                <Button className="advertisemntBtn">Advertisement</Button>
                <div
                  className="advertisementContainer"
                  style={{
                    backgroundImage: `url(${Images.common.advertist})`,
                  }}
                ></div>
              </Col>
            </Row>
          </div>

          <Footer />
        </Col>
      </Row>
    </div>
  );
}
