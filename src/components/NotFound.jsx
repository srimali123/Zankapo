import { Button, Row ,Col} from "antd";
import React from "react";
import { Images } from "../assets/Images/images";

const NotFound = (props) => {
  

  return (
    <div className=" notFoundContainer" >
      <Row className="header">
        <Col xs={24} sm={24} md={24} lg={24} xl={24} className="logoContainer">
        <img
                  src={Images.common.blueLogo}
                  alt="new"
                  className="logoHeader"
                />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} className="middlenotfoundcontainer">
        <img
                  src={Images.common.notfound}
                  alt="new"
                  className="notfound"
                />
                <p className="notfoundtext1">Opps..Page Not Found!</p>
                <p className="grayTextnotfound">You can try retyping the url </p>
                <p className="grayTextnotfound">Or you we can take you to the <span className="orangeText">Sankapo homepage</span></p>
        </Col>
      </Row>


    
     
      
    
    </div>
  );
};

export default NotFound;
