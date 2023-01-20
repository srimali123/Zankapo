import React, { useEffect, useState } from "react";
import { Images } from "../../../assets/Images/images.js";
import { Row, Col, Button, Input, Divider, Checkbox, Carousel } from "antd";
import { Link, useParams } from "react-router-dom";
import BuyProductHeader from "../buyProduct/buyProductHeader";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import Footer from "../../../components/footer/footer.jsx";
import { toast } from "react-toastify";
import Loader from "../../../components/spinner.jsx";

import { clearPostAd } from "../../../Redux/Slices/PostAds";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleAdvertisment } from "../../../Redux/Slices/PostAds/PostAdsSlice";
import { fetchCategories } from "../../../Redux/Slices/Category/CategorySlice";
import { Config } from "../../../Config/index";
import moment from "moment";

import PopularAds from "../../../components/popularAds.jsx";
const onChange = (checkedValues) => {
  console.log("checked = ", checkedValues);
};

export default function BuyProduct() {
  const { id } = useParams();
  const [showPhone, setShowPhone] = useState(false);
  const [jsonObj, setJsonObject] = useState({});
  const dispatch = useDispatch();
  const { advertisment, isLoading, message, isError } = useSelector(
    (state) => state.advertisment
  );

  const { isAuthenticated } = useSelector((state) => state.auth);

  const { categories } = useSelector((state) => state.categories);

  const filterCategory = () => {
    let filter = categories
      ?.filter((item) => item.id == id)
      .map(({ category }) => category);

    return filter[0];
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(fetchSingleAdvertisment(id));
    dispatch(fetchCategories());
    return () => {
      dispatch(clearPostAd());
    };
  }, [dispatch]);

  // useEffect(() => {
  //   onloadImage();
  // }, [jsonObj]);

  // const onloadImage = () => {
  //   let url = Config.API_BASE_URL;
  //   if (advertisment?.images.length !== 0) {
  //     let jsonObj = JSON.parse(advertisment?.images);
  //     setJsonObject(jsonObj);
  //   }
  // };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  Array.from(jsonObj).map((item, index) => {
    console.log(item);
  });

  const onSendMessage = (email) => {
    if (isAuthenticated) {
      window.location = `mailto:${email}`;
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
  return (
    <div>
      <Row className="mainProductConatainer">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <BuyProductHeader category={filterCategory()} />
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
                              {advertisment.images.length !==0  ?
                              <Carousel
                                swipeToSlide
                                draggable
                                afterChange={onChange}
                              >
                                {advertisment?.images.length !== 0 || advertisment?.images !== undefined
                                  ? Array.from(
                                      JSON.parse(advertisment?.images)
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
                                            src={`${Config.API_BASE_URL}uploads/products/${item}`}
                                            className="posterCon"
                                            alt="ad-img"
                                          />
                                        </Col>
                                      );
                                    })
                                  : null}
                              </Carousel> : <Loader isLoading={true} color={"#F98F21"} />}
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
                            Posted {moment(advertisment?.created_at).fromNow()}
                          </p>
                        </div>

                        <div className="stopContiner">
                          <img
                            src={Images.common.locationNew}
                            className="stopWatch"
                          />
                          <p className="stopText">{advertisment?.town}</p>
                        </div>
                        <p className="posterText">{advertisment?.title}</p>
                        <div className="priceDetail">
                          <div>
                            {" "}
                            <p className="priceText">Price:</p>
                          </div>

                          <div className="priceDetailText">
                            <p className="priceNew">
                              {`K${advertisment?.buy}`}
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
                                {advertisment?.sellerName}
                              </p>
                              <p className="conditonSubText">
                                {advertisment?.province}, Zambia
                              </p>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                              <div className="btnContainer">
                                <Button
                                  className="orangeBtnBuy"
                                  onClick={() =>
                                    onSendMessage(advertisment?.email)
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

                                  {showPhone
                                    ? advertisment?.mobile
                                    : " Show phone no"}
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <Divider />

                        <p className="descripText">Description</p>
                        <Link>
                          <div className="btnUsed">
                            {advertisment?.condition}
                          </div>
                        </Link>
                        <p className="context">{advertisment?.description}</p>
                      </div>

                     
                    </Col>
                  </Row>
                </div>

                <Row className="serchRow ">
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
                </Row>
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
