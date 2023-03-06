import React, { useEffect, useState } from "react";
import { Images } from "../../../assets/Images/images.js";
import { Row, Col, Button, Input, Divider, Checkbox, Carousel } from "antd";
import { Link, useNavigate, useParams } from "react-router-dom";
import BuyProductHeader from "../buyProduct/buyProductHeader";

import Footer from "../../../components/footer/footer.jsx";
import { toast } from "react-toastify";
import { FLoader } from "../../../components/spinner.jsx";

import { clearPostAd } from "../../../Redux/Slices/PostAds";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleAdvertisment } from "../../../Redux/Slices/PostAds/PostAdsSlice";
import { fetchCategories } from "../../../Redux/Slices/Category/CategorySlice";
import { Config } from "../../../Config/index";
import { fetchProductByCategory } from "../../../Services/AdvertismentService.js";
import moment from "moment";

import PopularAds from "../../../components/popularAds.jsx";

let jsonObj;
const onChange = (checkedValues) => {
  console.log("checked = ", checkedValues);
};
export default function BuyProduct() {
  const { id, category } = useParams();
  const [showPhone, setShowPhone] = useState(false);
  const [similarProduct, setSimilarProduct] = useState([]);
  const dispatch = useDispatch();
  const { advertisment, isLoading, message, isError } = useSelector(
    (state) => state.advertisment
  );
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.user);

  const { categories } = useSelector((state) => state.categories);

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

  const filterCategory = () => {
    let filter = categories
      ?.filter((item) => item.id == category)
      .map(({ category }) => category);

    return filter[0];
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      setShowPhone(true);
    } else {
      toast.error(
        "Login to show phone number and keep track of it in your account."
      );
    }
  };

  const findSimilarItems = async () => {
    const response = await fetchProductByCategory(category);

    if (response.success) {
      setSimilarProduct(response?.data?.data);
    } else {
      toast.error("check your internet connection");
    }
  };

  useEffect(() => {
    findSimilarItems();
  }, []);

  //naviage to specific ad
  const onAdNavigateHandler = (id, category) => {
    navigate(`/buyproduct/${id}/${category}`);
    window.location.reload(true);
  };

  if (advertisment?.images.length === 0) {
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
                              <Carousel
                                swipeToSlide
                                draggable
                                afterChange={onChange}
                              >
                                {advertisment?.images.length !== 0 ||
                                advertisment?.images !== undefined
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
                       
                          <div className="btnUsed">
                            {advertisment?.condition}
                          </div>
                       
                        <p className="context">{advertisment?.description}</p>
                      </div>
                    </Col>
                  </Row>
                </div>

                <Row className="serchRow ">
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <p className="serchText">Similar searches</p>
                    <Row gutter={[20, 20]}>
                      {similarProduct
                        ? similarProduct.slice(0, 3).map((item, idx) => {
                            jsonObj =
                              item.images.length !== 0 &&
                              JSON.parse(item?.images);
                            return (
                              <Col
                                xs={12}
                                sm={12}
                                md={8}
                                lg={8}
                                xl={8}
                                key={idx}
                              >
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
                        : null}
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
