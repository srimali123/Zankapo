import React from "react";

const DiscoverItem = (props) => {
  const { link, image, style, contentstyles } = props;

  return (
    <div className="outerMain">
      <div className="outerContainer">
        <img src={image}  className="discoverImg"/>
      </div>
      <a href="#" className='itemTitle' style={{...style}}>{link}</a>
      
    </div>
  );
};

export default DiscoverItem;
