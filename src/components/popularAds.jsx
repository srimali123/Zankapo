import React from "react";

const PopularAds = (props) => {
  const { image, description, price } = props;

  return (
    <div onClick={props.onAdNavigateHandler}>
      <div className="adcontainer">
        <img src={image} className="popularAddImg" />
      </div>
      <p className="descriptionText">{description}</p>
      <p className="priceText">{price}</p>
    </div>
  );
};

export default PopularAds;
