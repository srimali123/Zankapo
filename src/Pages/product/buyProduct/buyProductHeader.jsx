import React, { useState } from "react";
import { Row, Col, Button, Input, Dropdown, Menu, Modal } from "antd";
import { Link } from "react-router-dom";
import { Images } from "../../../assets/Images/images";
import Footer from "../../../components/footer/footer";
import { DownOutlined, LogoutOutlined } from "@ant-design/icons";
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
            href="https://www.antgroup.com"
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
            href="https://www.antgroup.com"
          >
         Logout
          </a>
        ),
        icon: <img src={Images.common.logout} className="logout"/>,
      },
    ]}
  />
);
export default function BuyProductHeader() {
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
  return (
    <div className="buyProductContainer">
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
        <div  className="profilePic"
            style={{
              backgroundImage: `url(${Images.common.profilePic})`,
            }}>
          
        </div>
      
        
        </div>
        <p className="profileName">Aliyon Tembo</p>
        </div>
        <div className="profileMainContTwo">
          <div>
          <Link className="contentLink"><p>My listings</p></Link>
<Link className="contentLink"><p>My profile</p></Link>
<Link className="contentLink"><p>Notifications</p></Link>

          </div>
          <div>

          <Link className="orangeDropText"><img src={Images.common.logout} className="logout"/>Logout</Link>
          </div>



        </div>
        </div>

        <p className="footerText">Sankapo ©2022</p>
      </Modal>
      <div className="headerContainerMain">
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className="headerMaincontainerProduct">
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
              <div className="centerContent">
                <div className="serchSection">
                  {/* <p className="searchCategoryText">category</p>
                  <img src={Images.common.down} className="down" /> */}
                  <div className="orangeSection">
                    <Dropdown
                      overlay={menu}
                      trigger={["click"]}
                      overlayClassName="hederdropdown"
                    >
                      <p className="searchCategoryText">Category</p>
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
              {/* <div className="profileConfimContainer">
                <div className="profileContainer">
                  <img src={Images.common.userColoured} className="userIcon" />
                  <a href="/register" className="link">
                    Register
                  </a>
                </div>

                <div className="profileContainer">
                  <img src={Images.common.userOutline} className="userIcon" />
                  <a href="/login" className="link">
                    Login
                  </a>
                </div>
              </div> */}

              {/* after when user login or regsiter */}

              <div className="confirmcontainerAfterLogin">
              <div  className="profileContainer">  <a href="#" className="link customLink">Buying</a></div>
              <div  className="profileContainer"> <a href="#" className="link customLink">Selling</a></div>
          
            <div  className="profileContainer">
            
               
                   <img  src={Images.common.userColoured} className="userIcon"/>
              <a href="#" className=" productlink nameLink">Aliyon
  <Dropdown overlay={menu} trigger={["click"]} overlayClassName="profileDropDown" className="profileDrop"  >
                      <img
                        src={Images.common.orangeDrop}
                        className="userIconDrop"
                        onClick={showModalTwo}
                      />
                      </Dropdown>
              
              </a>
              
               

            
              </div>
            </div>

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
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className="grayContainer">
            <div className="iconCont">
              <img src={Images.common.home} className="hederIcon" />
              <img src={Images.common.forwardNew} className="hederIconForward" />
              <Link to="/createAd"className="clothsLink">Cloths</Link>
            </div>
            <div className="iconCont backCont">
             
              <Link to="/" className="clothsLink backlink">Back</Link>
              <img src={Images.common.forwardNew} className="hederIconForward" />
            
            </div>
          </div>
        </Col>
      </Row>
      </div>
      
      
     
    </div>
  );
}
