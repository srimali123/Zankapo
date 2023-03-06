import React from "react";
import { Images } from "../assets/Images/images";

const PopularAds = (props) => {
  const { image, description, price, location, timestamp } = props;

  return (
    <div onClick={props.onAdNavigateHandler} className="fullcard">
      <div className="adcontainer">
        <img src={image} className="popularAddImg" />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <a style={{ fontSize: "10px", fontFamily: "400", color: "GrayText" }}>
          {location}
        </a>
        <a style={{ fontSize: "10px", fontFamily: "400", color: "GrayText" }}>
          {timestamp}
        </a>
      </div>
      <p className="descriptionText">{description.substring(0, 20)}</p>

      <p className="priceText">
        K {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </p>
    </div>
  );
};

export default PopularAds;
