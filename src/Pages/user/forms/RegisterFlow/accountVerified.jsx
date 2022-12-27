import React from "react";
import { Checkbox, Button, Row, Col, Input, Radio } from "antd";

import logoBlue from "../../../../assets/Images/common/bluelogo.png";


export default function AccountVerified(props) {
  return (
    <div>
      <div className="registerModal signupPersonalDetailModal confirmModal verfiedModal">
              <div className="RegisterModalTop signupPersonalModalTop confirmModalTop">
                <img src={logoBlue} alt="new" className="logoBlue" />
                <p className="registerHead">Account verified</p>
                <p className="registerSubHead confirmsubHead">
                  Your account has been verified successfuly
                </p>
               
                </div>
                <div className="registerModalContent personaletailModalContent verifiedcontent">
              <a href="/C" className="verifyRegisterLink verifiedLoginBtn">
              <Button
                className="registerBtn verifyBtnAccount "
                // onClick={() => setOpen(true)}
               
              >
             Login
              </Button>
              </a>
            </div>
              </div>
      
    </div>
  );
}
