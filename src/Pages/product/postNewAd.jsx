import React, { useEffect } from "react";
import { Images } from "../../assets/Images/images.js";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../Redux/Slices/Category/CategorySlice";
import { Config } from "../../Config/index.js";

export default function PostNewAd() {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="postAdMainContainer">
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className="postAdContainer">
            <div>
              <img src={Images.common.adLogo} className="placeAdLogo" />
            </div>
            <div>
              <Link to={"/"} className="cancelLink">
                Cancel
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className="postAdMiddleContainer">
            <div className="subContainer">
              <p className="mainHead">What do you want to advertise</p>
              <Row gutter={[50, 15]} className="cardContainer">
                {categories?.map((item, index) => {
                  return (
                    <Col
                      xs={24}
                      sm={24}
                      md={12}
                      lg={12}
                      xl={12}
                      key={index}
                      className="colProduct"
                    >
                      <div className="whiteBox marginBox">
                        <div>
                          {" "}
                          <img
                            className="cardImg"
                            src={`${Config.API_BASE_URL}uploads/icons/${item.icon}`}
                          />
                        </div>
                        <div>
                          {" "}
                          <Link
                            to={`/createAd/${item.category}/${item.id}`}
                            className="cardText"
                          >
                            {item.category}
                          </Link>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
