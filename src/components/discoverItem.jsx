import React from "react";

const DiscoverItem = (props) => {
  const { link, image, style, contentstyles } = props;

  return (
    <div className="outerMain">
      <div className="outerContainer">
        <img src={image} style={{ height: 52, width: 52 }} />
      </div>
      <a href="#" className='itemTitle'>{link}</a>
      
    </div>
  );
};

export default DiscoverItem;
