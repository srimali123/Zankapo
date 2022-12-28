import React from "react";
import { Images } from "../../../assets/Images/images.js";
import { Row, Col, Button, Input,Divider  } from "antd";
import { Link } from "react-router-dom";
import BuyProductHeader from "../buyProduct/buyProductHeader";
export default function BuyProduct() {
  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <BuyProductHeader />
          <div className="middleContainerProduct">
            <Row gutter={[5,20]}>
              <Col xs={24} sm={24} md={24} lg={24} xl={16}>
                <div className="productContainerMain">
<Row gutter={[20,0]}>
  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
<div   className="posterCon"
            style={{
              backgroundImage: `url(${Images.common.poster})`,
            }}>

</div>

  </Col>
  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
<p className="posterText">Apple AirPods 3rd Generation Wireless Charging Case - Genuine Apple Very Good</p>
<Divider />
<p className="conditionText">Condition:<span className="spanCondition">Used as new</span></p>
<Divider />
<div className="priceContainner">
  <div>
<p className="priceText">Price:<span className="priceNew">K27,000</span></p>
  </div>
  <div className="btnContainer">
<Button className="orangeBtnBuy">Buy Now</Button>
<Button className="orangeBtnBuy">Add to wishlist</Button>
  </div>
</div>
<Divider />

<p className="conditionText">Delivery within lusaka </p>
<p  className="conditionText" style={{fontWeight:400, lineHeight:0,}}>K55 for delivery</p>
  </Col>
</Row>

                </div>
              </Col>
              <Col  xs={24} sm={24} md={24} lg={24} xl={8}>
              <div className="advertisementContainer">


              </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
