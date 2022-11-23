import React from "react";
import { Row, Col, Button, Input } from "antd";
import Header from "../../components/header/header";
import DiscoverItem from "../../components/discoverItem";
import {Images} from "../../assets/Images/images.js";
import PopularAds from "../../components/popularAds";
export default function HomePage(props) {
  return (
    <div>
      <Row>
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
                <div className="orangeSection">
                  <p className="searchCategoryText">category</p>
                  <img src={Images.common.down} className="down" />
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
                <Row gutter={[0,64]} >
                  <Col xs={6} sm={6} md={6} lg={6} xl={3}>
                    <DiscoverItem
                    image={Images.discover.cloths}
                    link={'Clothes'}
                    />
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={3}>
                  <DiscoverItem
                    image={Images.discover.houseHold}
                    link={'Household'}
                    />
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={3}>
                  <DiscoverItem
                    image={Images.discover.electronics}
                    link={'Electronics'}
                    />
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={3}>
                  <DiscoverItem
                    image={Images.discover.house}
                    link={'Property'}
                    />
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={3}>
                  <DiscoverItem
                    image={Images.discover.computer}
                    link={'Computers'}
                    />
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={3}>
                  <DiscoverItem
                    image={Images.discover.collection}
                    link={'Collectibles'}
                    />
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={3}>
                  <DiscoverItem
                    image={Images.discover.cars}
                    link={'Vehicles'}
                    />
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={3}>
                  <DiscoverItem
                    image={Images.discover.mobile}
                    link={'Mobile phones'}
                    />
                  </Col>

                </Row>
              </Col>
            </Row>

            <p className="discoverItemText secondSectionText">Popular ads now</p>
            <Row gutter={0}>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Row gutter={[20,64]} >
                  <Col xs={12} sm={12} md={8} lg={6} xl={6}>
                   <PopularAds
                   image={Images.populaAd.ad1}
                   description={'Play station 5 console With all accesories'}
                   price={'K27,000'}
                   />
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                   <PopularAds
                   image={Images.populaAd.ad1}
                   description={'Play station 5 console With all accesories'}
                   price={'K27,000'}
                   />
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                   <PopularAds
                   image={Images.populaAd.ad1}
                   description={'Play station 5 console With all accesories'}
                   price={'K27,000'}
                   />
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                   <PopularAds
                   image={Images.populaAd.ad1}
                   description={'Play station 5 console With all accesories'}
                   price={'K27,000'}
                   />
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                   <PopularAds
                   image={Images.populaAd.ad1}
                   description={'Play station 5 console With all accesories'}
                   price={'K27,000'}
                   />
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                   <PopularAds
                   image={Images.populaAd.ad1}
                   description={'Play station 5 console With all accesories'}
                   price={'K27,000'}
                   />
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                   <PopularAds
                   image={Images.populaAd.ad1}
                   description={'Play station 5 console With all accesories'}
                   price={'K27,000'}
                   />
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                   <PopularAds
                   image={Images.populaAd.ad1}
                   description={'Play station 5 console With all accesories'}
                   price={'K27,000'}
                   />
                  </Col>
                

                </Row>
              </Col>
            </Row>


          </div>
        </Col>
      </Row>
    </div>
  );
}
