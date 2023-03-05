import React from "react";

const DiscoverItem = (props) => {
  const { link, image, style, contentstyles } = props;

  return (
  
    <div className="outerMain">
      <a onClick={props.onClick}>
      <div className="outerContainer" >
        <img src={image} className="discoverImg" />
      </div>
      <a className="itemTitle" style={{ ...style }} >
        {link}
      </a>
      </a>
    
    </div>
  );
};

export default DiscoverItem;
