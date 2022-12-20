import React from "react";
import { Images } from "../../assets/Images/images.js";
import { Row, Col, Button, Input } from "antd";
import { Link } from "react-router-dom";
export default function PreviewAd() {
  return (
    <div className="createAdMainContainerPreview">
          <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className="createAdContainerPreview">
            <div>
              <img src={Images.common.adLogo} className="placeAdLogo" />
            </div>
            <div>
              <Link to={"/createAd"} href="#" className="cancelLink">
               Back <img src={Images.common.back} className="backbtnImg" alt="back" />
              </Link>
            </div>
          </div>
        </Col>
      </Row>

      <div className="contentTwo">
    <p className="adPreview">Ad Preview</p>
                  <div className="previewCont"></div>
                  <p className="adPreview">Title</p>
                  <p className="adPreview">Description</p>
                  <p className="adPreview">Price</p>

                  <Button className="shipingButton ">Post Ad</Button>
    </div>
    </div>
  
  );
}
