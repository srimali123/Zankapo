import { Button } from "antd";
import React from "react";

const HowItsWork = (props) => {
  const { image, title, cardOneMain } = props;

  return (
    <div className=" howItsWorkMainContainer" style={{ cardOneMain }}>
      <div className="cardSectionOne">
        <img src={image} className="cardImg" />
      </div>

      <div className="cardSectionTwo">
        <p className="titleone">{title}</p>
        <Button className="cardBtn">Read more</Button>
      </div>
    </div>
  );
};

export default HowItsWork;
