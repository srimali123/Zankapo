import React from "react";
import { Row, Col, Button, Input, Dropdown, Menu, Carousel } from "antd";
import Header from "../../components/header/header";
import DiscoverItem from "../../components/discoverItem";
import { Images } from "../../assets/Images/images.js";
import PopularAds from "../../components/popularAds";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import Card from "../../components/card";
import HowItsWork from "../../components/howItsWork";
import Footer from "../../components/footer/footer";
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const onChange = (currentSlide) => {
  console.log(currentSlide);
};
const menu = (
  <Menu
    className="menu"
    items={[
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
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        ),
      },
      {
        key: "3",
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
    ]}
  />
);

export default function HomePage(props) {
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
              <p className="centerContentText">
                Sankapo is the largest open marketplace for Zambian buyers and
                sellers to list their products.{" "}
              </p>
              <div className="serchSection">
                {/* <p className="searchCategoryText">category</p>
                  <img src={Images.common.down} className="down" /> */}
                <div className="orangeSection">
                  <Dropdown overlay={menu} trigger={["click"]} overlayClassName="homedropdown">
                    <p className="searchCategoryText">category</p>
                  </Dropdown>
                  <img
                    src={Images.common.down}
                    className="down"
                    onClick={(e) => e.preventDefault()}
                  />
                </div>

                <div className="whiteSection">
                  <Input
                    placeholder="What do you want to buy?"
                    className="searchTextInput"
                  />

                  <img src={Images.common.search} className="search" />
                </div>
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
                  <Col xs={6} sm={6} md={6} lg={6} xl={3}>
                    <DiscoverItem
                      image={Images.discover.cloths}
                      link={"Clothes"}
                      style={{marginRight:25}}
                    />
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={3} className="discoverCol">
                    <DiscoverItem
                      image={Images.discover.houseHold}
                      link={"Household"}
                    />
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={3} >
                    <DiscoverItem
                      image={Images.discover.electronics}
                      link={"Electronics"}
                    />
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={3} >
                    <DiscoverItem
                      image={Images.discover.house}
                      link={"Property"}
                    />
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={3} >
                    <DiscoverItem
                      image={Images.discover.computer}
                      link={"Computers"}
                    />
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={3} className="discoverCol">
                    <DiscoverItem
                      image={Images.discover.collection}
                      link={"Collectibles"}
                    />
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={3} className="discoverCol">
                    <DiscoverItem
                      image={Images.discover.cars}
                      link={"Vehicles"}
                    />
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={3} className="discoverCol">
                    <DiscoverItem
                      image={Images.discover.mobile}
                      link={"Mobile phones"}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* popular adds */}
            <p className="discoverItemText secondSectionText">
              Popular ads now
            </p>
            <Row gutter={0} className="addSection">
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Row gutter={[20, 10]}>
                  <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                    <PopularAds
                      image={Images.populaAd.ad1}
                      description={"Play station 5 console With all accesories"}
                      price={"K27,000"}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                    <PopularAds
                      image={Images.populaAd.ad1}
                      description={"Play station 5 console With all accesories"}
                      price={"K27,000"}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                    <PopularAds
                      image={Images.populaAd.ad1}
                      description={"Play station 5 console With all accesories"}
                      price={"K27,000"}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                    <PopularAds
                      image={Images.populaAd.ad1}
                      description={"Play station 5 console With all accesories"}
                      price={"K27,000"}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                    <PopularAds
                      image={Images.populaAd.ad1}
                      description={"Play station 5 console With all accesories"}
                      price={"K27,000"}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                    <PopularAds
                      image={Images.populaAd.ad1}
                      description={"Play station 5 console With all accesories"}
                      price={"K27,000"}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                    <PopularAds
                      image={Images.populaAd.ad1}
                      description={"Play station 5 console With all accesories"}
                      price={"K27,000"}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                    <PopularAds
                      image={Images.populaAd.ad1}
                      description={"Play station 5 console With all accesories"}
                      price={"K27,000"}
                    />
                  </Col>
                </Row>
              </Col>
              <Button className="seeMoreBtn">
                See More
                <img src={Images.common.forward} className="forwardIcon" />
              </Button>
            </Row>

            {/* recently add */}
            <p className="discoverItemText secondSectionText thirdsectionText">
              Recently added
            </p>
            <Row gutter={0} className="addSection">
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Row gutter={[20, 10]}>
                  <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                    <PopularAds
                      image={Images.populaAd.ad1}
                      description={"Play station 5 console With all accesories"}
                      price={"K27,000"}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                    <PopularAds
                      image={Images.populaAd.ad1}
                      description={"Play station 5 console With all accesories"}
                      price={"K27,000"}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                    <PopularAds
                      image={Images.populaAd.ad1}
                      description={"Play station 5 console With all accesories"}
                      price={"K27,000"}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                    <PopularAds
                      image={Images.populaAd.ad1}
                      description={"Play station 5 console With all accesories"}
                      price={"K27,000"}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                    <PopularAds
                      image={Images.populaAd.ad1}
                      description={"Play station 5 console With all accesories"}
                      price={"K27,000"}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                    <PopularAds
                      image={Images.populaAd.ad1}
                      description={"Play station 5 console With all accesories"}
                      price={"K27,000"}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                    <PopularAds
                      image={Images.populaAd.ad1}
                      description={"Play station 5 console With all accesories"}
                      price={"K27,000"}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                    <PopularAds
                      image={Images.populaAd.ad1}
                      description={"Play station 5 console With all accesories"}
                      price={"K27,000"}
                    />
                  </Col>
                </Row>
              </Col>
              <Button className="seeMoreBtn">
                See More
                <img src={Images.common.forward} className="forwardIcon" />
              </Button>
            </Row>

            {/*  Houses for rent */}

            <p className="discoverItemText secondSectionText thirdsectionText">
              Houses for rent
            </p>
            <Row gutter={0} className="addSection">
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Row gutter={[20, 10]}>
                  <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                    <PopularAds
                      image={Images.populaAd.ad1}
                      description={"Play station 5 console With all accesories"}
                      price={"K27,000"}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                    <PopularAds
                      image={Images.populaAd.ad1}
                      description={"Play station 5 console With all accesories"}
                      price={"K27,000"}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                    <PopularAds
                      image={Images.populaAd.ad1}
                      description={"Play station 5 console With all accesories"}
                      price={"K27,000"}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                    <PopularAds
                      image={Images.populaAd.ad1}
                      description={"Play station 5 console With all accesories"}
                      price={"K27,000"}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                    <PopularAds
                      image={Images.populaAd.ad1}
                      description={"Play station 5 console With all accesories"}
                      price={"K27,000"}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                    <PopularAds
                      image={Images.populaAd.ad1}
                      description={"Play station 5 console With all accesories"}
                      price={"K27,000"}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                    <PopularAds
                      image={Images.populaAd.ad1}
                      description={"Play station 5 console With all accesories"}
                      price={"K27,000"}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                    <PopularAds
                      image={Images.populaAd.ad1}
                      description={"Play station 5 console With all accesories"}
                      price={"K27,000"}
                    />
                  </Col>
                </Row>
              </Col>
              <Button className="seeMoreBtn">
                See More
                <img src={Images.common.forward} className="forwardIcon" />
              </Button>
            </Row>

            {/* how its work */}
            <div className="howItsWorkWeb">
            <p className="discoverItemText secondSectionText thirdsectionText">
              how it works
            </p>
            <Row gutter={0} className="addSection trendingSection howItsWork">
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Row gutter={[20, 50]}>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                   <HowItsWork image={Images.common.ad2} title={"How to buy"}/>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <HowItsWork image={Images.common.ad2} title={"How to buy"}/>
                  </Col>
                </Row>
              </Col>
            </Row>
            </div>
     {/* how its work end */}

            {/* how its work mobile */}
            <div className="howItsWorkMobile">
            <p className="discoverItemText secondSectionText thirdsectionText">
              how it works
            </p>
           
            <Row gutter={0} className="addSection trendingSection howItsWork">
           
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Row>
                <Carousel   swipeToSlide draggable afterChange={onChange}>
     
   
                  <Col xs={24} sm={24} md={24} lg={24} xl={24} >
                   <HowItsWork image={Images.common.ad2} title={"How to buy"}/>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24} >
                  <HowItsWork image={Images.common.ad2} title={"How to buy"}/>
                  </Col>
                   </Carousel>
     
                  
                </Row>
              </Col>
          
            </Row>
            
            </div>



                   {/* how its work mobile end */}

            {/* This is trending web*/}
            <div className="thisIsTrendingWeb">
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
            </div>

            <div className="thisIsTrendingMobile">
            <p className="discoverItemText secondSectionText thirdsectionText">
              This is Trending
            </p>
            <Row gutter={0} className="addSection trendingSection">
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Row gutter={[10, 50]}>
                <Carousel   swipeToSlide draggable afterChange={onChange}>
                  <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Card image={Images.common.ad2} title={"Wrist watches"} />
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Card image={Images.common.ad2} title={"Salaula shoes"} />
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Card image={Images.common.ad2} title={"Home Goods"} />
                  </Col>
                  </Carousel>
                </Row>
              </Col>
            </Row>
            </div>



          </div>
<Footer/>
          {/* <Row gutter={[0, 10]} className="mainFooterContainer">
            <Row gutter={[20, 30]} className="footerContainer">
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className="footerContent"
              >
                <p className="footerMainHead">Buy</p>
                <a href="#" className="footerLink">
                  How to shop
                </a>
                <a href="#" className="footerLink">
                  Categories
                </a>
                <a href="#" className="footerLink">
                  Popular Brands
                </a>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className="footerContent"
              >
                <p className="footerMainHead">Sell</p>
                <a href="#" className="footerLink">
                  How to sell
                </a>
                <a href="#" className="footerLink">
                  Prices
                </a>
                <a href="#" className="footerLink">
                  Popular Brands
                </a>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className="footerContent"
              >
                <p className="footerMainHead">Contact</p>
                <a href="#" className="footerLink">
                  FAQ
                </a>
                <a href="#" className="footerLink">
                  Privacy policy
                </a>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className="footerContent"
              >
                <p className="footerMainHead">Information</p>
                <a href="#" className="footerLink">
                  Terms of service
                </a>
              </Col>
            </Row>
            <Row className="socialMediaContainer">
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={12}
                xl={12}
                className="socialMediaSection"
              >
                <a>
                  <img src={Images.common.insta} className="socialIcon" />
                </a>
                <a>
                  <img src={Images.common.facebook} className="socialIcon" />
                </a>
                <a>
                  <img src={Images.common.twitter} className="socialIcon" />
                </a>
                <a>
                  <img src={Images.common.linkedin} className="socialIcon" />
                </a>

                <img src={Images.common.line} className="line" />
              </Col>

              <Col
                xs={12}
                sm={12}
                md={6}
                lg={12}
                xl={12}
                className="btnSectionFooter"
              >
                <a>
                  {" "}
                  <img src={Images.common.playBtn} className="FooterBtn" />
                </a>
                <a>
                  {" "}
                  <img src={Images.common.appleBtn} className="FooterBtn appleBtn" />
                </a>
              </Col>
            </Row>

            <p className="footerText">Sankapo © 2022</p>
          </Row> */}
        </Col>
      </Row>
    </div>
  );
}
