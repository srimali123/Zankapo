import React from "react";
import { Row, Col, Button } from "antd";
import logoBlue from "../../assets/Images/common/bluelogo.png";
import menu from "../../assets/Images/common/menu.png";
import translate from "../../assets/Images/common/translate.png";
import add from "../../assets/Images/common/addicon.png";
import login from "../../assets/Images/common/addicon.png";
import userfilled from "../../assets/Images/common/usercoloured.png";
import userOutline from "../../assets/Images/common/useroutline.png";



export default function Header(props) {
  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className="headerMaincontainer">
            <div className="headerSectionOne">
              <img src={menu} alt="new" className="menu" />
              <img src={logoBlue} alt="new" className="logoHeader" />
            </div>

            <div className="headerSectionTwo">
              <div className="translateContainer">
                <a href="#">
                  <img src={translate} alt="new" className="translateImg" />
                </a>
              </div>
              <button className="addBtn">
                <a href="#">
                  <img src={add} className="addIcon" />
                </a>
                Place Ad
              </button>
              {/* when user didnt register or login */}
              <div className="profileConfimContainer">
              <div  className="profileContainer">
               
              <img  src={userfilled} className="userIcon"/>
              <a href="#" className="link">Register</a>
              </div>
              
            
              <div  className="profileContainer">
               
                <img  src={userOutline} className="userIcon"/>
              <a href="#" className="link">Login</a>

            
              </div>

             
              
              
              </div>

              {/* after when user login or regsiter */}
            
            {/* <div className="confirmcontainerAfterLogin">
              <div  className="profileContainer">  <a href="#" className="link customLink">Buying</a></div>
              <div  className="profileContainer"> <a href="#" className="link customLink">Selling</a></div>
          
            <div  className="profileContainer">
               
                <img  src={userOutline} className="userIcon"/>
              <a href="#" className="link">Aliyon</a>

            
              </div>
            </div> */}
              
               

           
            </div>
          </div>

         

        </Col>
      </Row>
    </div>
  );
}
