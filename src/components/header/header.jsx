import React, { useState } from "react";

import { Row, Col, Button, Modal, Dropdown, message, Menu } from "antd";
import { Link } from "react-router-dom";
import { Images } from "../../assets/Images/images";
import { DownOutlined, LogoutOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { clearUser } from "../../Redux/Slices/User/UserSlice";
import { reset } from "../../Redux/Slices/Auth";

export default function Header(props) {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);

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

  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
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
              My listing
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
              onClick={() => logout()}
            >
              Logout
            </a>
          ),
          icon: <LogoutOutlined />,
        },
      ]}
    />
  );

  //logout function
  const logout = async () => {
    await dispatch(clearUser());
    await dispatch(reset());
    await dispatch();
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
          <div className="modalCont">
            {" "}
            <Link to="/" className="linkModal">
              <img
                src={Images.common.clock}
                alt="clock"
                className="headerMenuIcon"
              />
              Last chance bid
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
                <Link to={"/placeAd"} className="linkNew">
                  Clothes
                </Link>
                <Link to="/" className="linkNew">
                  Household
                </Link>
                <Link to="/" className="linkNew">
                  Real esate
                </Link>
                <Link to="/" className="linkNew">
                  Collectibles
                </Link>
                <Link to="/" className="linkNew">
                  Vehicles
                </Link>
                <Link to="/" className="linkNew">
                  Computers
                </Link>
                <Link to="/" className="linkNew">
                  Mobile phones
                </Link>
              </div>
            )}
          </div>
        </div>

        <p className="footerText">Sankapo ©2022</p>
      </Modal>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className="headerMaincontainer">
            <div className="headerSectionOne">
              <Link to="/">
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

            <div className="headerSectionTwo">
              <div className="translateContainer">
                <Link to="#">
                  <img
                    src={Images.common.translate}
                    alt="new"
                    className="translateImg"
                  />
                </Link>
              </div>
              <button href="#" className="addBtn">
                <Link to={"/placeAd"}>
                  <img src={Images.common.addIcon} className="addIcon" />
                </Link>
                Place Ad
              </button>
              {/* when user didnt register or login */}
              {isAuthenticated ? (
                <div className="confirmcontainerAfterLogin">
                  {/* <div className="profileContainer">
                    {" "}
                    <Link to="/buyProduct" className="link customLink">
                      Buying
                    </Link>
                  </div> */}
                  <div className="profileContainer">
                    {" "}
                    <a href="#" className="link customLink">
                      Selling
                    </a>
                  </div>

                  <div className="profileContainer">
                    <img
                      src={Images.common.userColoured}
                      className="userIcon"
                    />
                    <a href="#" className="link nameLink">
                      {user?.fullname}
                      <Dropdown
                        overlay={menu}
                        trigger={["click"]}
                        overlayClassName="profileDropDown"
                      >
                        <img
                          src={Images.common.orangeDrop}
                          className="userIconDrop"
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
                <Link to="/createAd">
                  <img
                    src={Images.common.greenAdd}
                    className="userIconMobile"
                  />
                </Link>
                <div>
                  <img src={Images.common.mobileAcc} className="userIconAcc" />
                  <Link to="/">
                    <img
                      src={Images.common.darkdrop}
                      className="userIconAccDrop"
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
