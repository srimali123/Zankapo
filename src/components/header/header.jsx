import React, { useState } from "react";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

import { Row, Col, Modal, Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import { Images } from "../../assets/Images/images";

import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../../Redux/Slices/User/UserSlice";
import { fetchCategories } from "../../Redux/Slices/Category/CategorySlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { LoginOutlined } from "@ant-design/icons";
export default function Header(props) {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { categories } = useSelector((state) => state.categories);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // dropddownmodal
  const [isModalOpenTwo, setIsModalOpenTwo] = useState(false);
  const showModalTwo = () => {
    setIsModalOpenTwo(true);
  };
  const handleOkTwo = () => {
    setIsModalOpenTwo(false);
  };
  const handleCancelTwo = () => {
    setIsModalOpenTwo(false);
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

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
              onClick={() => navigate("/Dashboard")}
            >
              My listings
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => navigate("/Dashboard")}
            >
              My profile
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => navigate("/Dashboard")}
            >
              Notifications
            </a>
          ),
        },
        {
          key: "4",
          label: (
            <a
              className="logoutText"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => logout()}
            >
              Logout
            </a>
          ),
          icon: <img src={Images.common.logout} className="logout" />,
        },
      ]}
    />
  );

  //logout function
  const logout = async () => {
    await dispatch(clearUser());
    window.location.assign("/");
  };

  return (
    <div>
      {/* menu modal */}

      <Modal
        wrapClassName="menuModal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="modalContainer">
          <div className="modalCont">
            <Link to="/" className="linkModal">
              <img
                src={Images.common.bulb}
                alt="bulb"
                className="headerMenuIcon"
              />
              Popular on sankapo
            </Link>
          </div>
          <div className="modalCont customCont">
            {" "}
            <Link onClick={handleClick} className="linkModal">
              <img
                src={Images.common.smallMenu}
                alt="menu"
                className="headerMenuIcon"
              />
              Categories
            </Link>
            {isShown && (
              <div className="linkContainer">
                {categories?.map((item, idx) => {
                  return (
                    <Link to={"/searchProduct"} className="linkNew" key={idx}>
                      {item.category}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <p className="footerText">Sankapo ©2022</p>
      </Modal>

      {/* /dropdownModal */}
      <Modal
        wrapClassName="dropDownModal"
        open={isModalOpenTwo}
        onOk={handleOkTwo}
        onCancel={handleCancelTwo}
      >
        <div className="modalContainer">
          <div className="profileMainContOne">
            <div className="profileOuter">
              <div
                className="profilePic"
                style={{
                  backgroundImage: `url(${Images.common.profilePic})`,
                }}
              ></div>
            </div>
            <p className="profileName">{user?.fullname}</p>
          </div>
          <div className="profileMainContTwo">
            <div>
              {isAuthenticated ? (
                <>
                  <Link className="contentLink" to={"/Dashboard"}>
                    <p>My listings</p>
                  </Link>
                  <Link className="contentLink" to={"/Dashboard"}>
                    <p>My profile</p>
                  </Link>
                  <Link className="contentLink" to={"/Dashboard"}>
                    <p>Notifications</p>
                  </Link>

                  <Link className="orangeDropText" onClick={() => logout()}>
                    <img src={Images.common.logout} className="logout" />
                    Logout
                  </Link>
                </>
              ) : (
                <Link className="orangeDropText" to="/login">
                  <LoginOutlined className="logout" />
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>

        <p className="footerText">Sankapo ©2022</p>
      </Modal>

      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className="headerMaincontainer">
            <div className="headerSectionOne">
              <Link>
                <img
                  src={Images.common.menu}
                  alt="new"
                  className="menu"
                  onClick={showModal}
                />
              </Link>
              <Link to="/">
                <img
                  src={Images.common.blueLogo}
                  alt="new"
                  className="logoHeader"
                />
              </Link>
            </div>

            <div className="headerSectionTwo" style={{ position: "relative" }}>
              <div className="translateContainer">
                <Link>
                  <img
                    src={Images.common.translate}
                    alt="new"
                    className="translateImg"
                  />
                </Link>
                {/* <div>
                  <CountryDropdown />
                  <RegionDropdown />
                </div> */}
              </div>

              <Link className="addBtn" to={"/placeAd"}>
                <Link to={"/placeAd"}>
                  <img src={Images.common.addIcon} className="addIcon" />
                </Link>
                Place Ad
              </Link>
              {/* when user didnt register or login */}
              {isAuthenticated ? (
                <div
                  className="confirmcontainerAfterLogin"
                  style={{ position: "relative" }}
                >
                  <div className="profileContainer">
                    <img
                      src={Images.common.userColoured}
                      className="userIcon"
                    />
                    <a className="link nameLink" style={{ cursor: "default" }}>
                      {user?.fullname}
                      <Dropdown
                        style={{
                          position: "absolute",
                          overflow: "hidden",
                          zIndex: 1,
                        }}
                        overlay={menu}
                        overlayClassName="profileDropDown"
                      >
                        <img
                          src={Images.common.orangeDrop}
                          className="userIconDrop"
                          style={{ cursor: "pointer" }}
                        />
                      </Dropdown>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="profileConfimContainer">
                  <div className="profileContainer">
                    <img
                      src={Images.common.userColoured}
                      className="userIcon"
                    />
                    <Link to="/register" className="link">
                      Register
                    </Link>
                  </div>

                  <div className="profileContainer">
                    <img
                      src={Images.common.userColoured}
                      className="userIcon"
                    />
                    <Link to="/login" className="link">
                      Login
                    </Link>
                  </div>
                </div>
              )}

              {/* mobile view */}

              <div className="mobileHeader">
                <Link to="/placeAd">
                  <img
                    src={Images.common.greenAdd}
                    className="userIconMobile"
                  />
                </Link>
                <div>
                  <img
                    src={Images.common.mobileAcc}
                    onClick={showModalTwo}
                    className="userIconAcc"
                  />
                  <Link>
                    <img
                      src={Images.common.darkdrop}
                      className="userIconAccDrop"
                      onClick={showModalTwo}
                    />
                  </Link>
                </div>
              </div>

              {/* mobile view end */}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
