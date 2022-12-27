import React from "react";
import { Checkbox, Button, Row, Col, Input, Radio } from "antd";

import logoBlue from "../../../../assets/Images/common/bluelogo.png";


export default function ConfirmPassword(props) {
  return (
    <div>
     <div className="registerModal signupPersonalDetailModal confirmModal">
              <div className="RegisterModalTop signupPersonalModalTop confirmModalTop">
                <img src={logoBlue} alt="new" className="logoBlue" />
                <p className="registerHead">Confirm your account</p>
                <p className="registerSubHead confirmsubHead">
                We have sent a link to your email to verify your account 
                </p>
              </div>
             
            </div> 
      
    </div>
  );
}
