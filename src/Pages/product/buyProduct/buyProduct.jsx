import React from "react";
import { Images } from "../../../assets/Images/images.js";
import { Row, Col, Button, Input, Divider, Checkbox } from "antd";
import { Link } from "react-router-dom";
import BuyProductHeader from "../buyProduct/buyProductHeader";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import Footer from "../../../components/footer/footer.jsx";
import PopularAds from "../../../components/popularAds.jsx";
const onChange = (checkedValues) => {
  console.log("checked = ", checkedValues);
};
export default function BuyProduct() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div>
      <Row className="mainProductConatainer">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <BuyProductHeader />
          <div className="middleContainerProduct">
            <Row gutter={[20, 20]}>
              <Col xs={24} sm={24} md={24} lg={18} xl={18}>
                <div className="productContainerMain">
                  <Row gutter={[30, 0]}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <div
                        className="posterCon"
                        style={{
                          backgroundImage: `url(${Images.common.poster})`,
                        }}
                      ></div>
                      <Divider />
                      <div className="stopWebContent">
                        <div className="stopContiner">
                          <img
                            src={Images.common.stopWatch}
                            className="stopWatch"
                          />
                          <p className="stopText">Posted 20 mins ago</p>
                        </div>

                        <div className="stopContiner">
                          <img
                            src={Images.common.locationNew}
                            className="stopWatch"
                          />
                          <p className="stopText">Lusaka</p>
                        </div>
                        <p className="posterText">
                          Apple AirPods 3rd Generation Wireless Charging Case -
                          Genuine Apple Very Good
                        </p>
                        <div className="priceDetail">
                          <div>
                            {" "}
                            <p className="priceText">Price:</p>
                          </div>

                          <div className="priceDetailText">
                            <p className="priceNew">
                              K27,000
                              <br />
                            </p>
                          </div>
                        </div>

                        <Divider />
                        <div className="priceContainner">
                          <Row gutter={[0, 30]}>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                              <p className="sellerDetails">About the seller</p>
                              <p className="sellerName">Aliyon Tembo</p>
                              <p className="conditonSubText">Lusaka, Zambia</p>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                              <div className="btnContainer">
                                <Button className="orangeBtnBuy">
                                  <img
                                    src={Images.common.message}
                                    alt="message"
                                    className="messageIcon"
                                  />
                                  Send Message
                                </Button>
                                <Button className="orangeBtnBuy">
                                  <img
                                    src={Images.common.mobile}
                                    alt="mobile"
                                    className="messageIcon"
                                  />
                                  Show phone no
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <Divider />

                        <p className="descripText">Description</p>
                        <Link>
                          <div className="btnUsed">Used as new</div>
                        </Link>
                        <p className="context">
                          You can use EarPods (sold separately) to listen to
                          music and videos and to make calls on iPhone. EarPods
                          feature a microphone, volume buttons, and the center
                          button. Use the center button to answer and end calls,
                          control audio and video playback, and use Siri, even
                          when iPhone is locked
                        </p>
                      </div>
                    </Col>
                 
                    {/* <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <p className="posterText">
                        Apple AirPods 3rd Generation Wireless Charging Case -
                        Genuine Apple Very Good
                      </p>
                      <Divider />
                      <p className="conditionText">
                        Condition:
                        <span className="spanCondition">Used as new</span>
                      </p>
                      <Divider />
                      <div className="priceContainner">
                        <Row gutter={[50,30]}>
                          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                          <div className="priceDetail">
                          <div>
                            {" "}
                            <p className="priceText">Price:</p>
                          </div>

                          <div className="priceDetailText">
                            <p className="priceNew">
                              K27,000<br/> <span className="contextText">per bedspace Monthly</span>
                            </p>
                            <Link>
                        <div className="btnUsed" style={{marginLeft:10}}>Available</div>
                      </Link>
                          </div>
                        </div>

                          </Col>
                          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                          <div className="btnContainer">
                          <Button className="orangeBtnBuy">Contact owner</Button>
                        
                        </div>

                          </Col>
                        </Row>
                       
                       
                      </div>
                      <Divider />

                      <p className="conditionText">Location:<span className="conditonSubText"> PHI 10 mins away from Levy mwanawasa medical university</span></p>
                   
                      <Divider />
                      <Row>
                      <div>
                        <Checkbox.Group
                          style={{
                            width: "100%",
                          }}
                          onChange={onChange}
                        >
                          <Row gutter={[0, 15]}>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                              <Checkbox
                                className="checkCreateProduct"
                                value="A"
                              >
                                House
                              </Checkbox>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                              <Checkbox
                                className="checkCreateProduct"
                                value="B"
                              >
                                Apartment
                              </Checkbox>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                              <Checkbox
                                className="checkCreateProduct"
                                value="C"
                              >
                                Shared Apartment
                              </Checkbox>
                            </Col>
                          
                          </Row>
                        </Checkbox.Group>
                        <div className="stopmobilecontent">
                      <div className="stopContiner">
                        <img
                          src={Images.common.stopWatch}
                          className="stopWatch"
                        />
                        <p className="stopText">Posted 20 mins ago</p>
                      </div>

                      <div className="stopContiner">
                        <img
                          src={Images.common.locationNew}
                          className="stopWatch"
                        />
                        <p className="stopText">Posted 20 mins ago</p>
                      </div>

                      <p className="descripText">Description</p>
                      <Link>
                        <div className="btnUsed">Available</div>
                      </Link>
                      <p className="context">
                        You can use EarPods (sold separately) to listen to music
                        and videos and to make calls on iPhone. EarPods feature
                        a microphone, volume buttons, and the center button. Use
                        the center button to answer and end calls, control audio
                        and video playback, and use Siri, even when iPhone is
                        locked
                      </p>
                      </div>
                      </div>
                      </Row>
                     
                     
                      
                      
                    </Col> */}
                  </Row>
                </div>
              
                  <Row className="serchRow ">
                    <Col  xs={24} sm={24} md={24} lg={24} xl={24}>
                    <p className="serchText">Similar searches</p>
                <Row gutter={[20,20]}>
                  <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                    <PopularAds
                     image={Images.populaAd.ad1}
                     description={"Play station 5 console With all accesories"}
                     price={"K27,000"}/>
                  </Col>

                  <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                  <PopularAds
                   image={Images.populaAd.ad1}
                   description={"Play station 5 console With all accesories"}
                   price={"K27,000"}/>
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                  <PopularAds
                   image={Images.populaAd.ad1}
                   description={"Play station 5 console With all accesories"}
                   price={"K27,000"}/>
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
