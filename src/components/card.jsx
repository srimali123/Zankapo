import { Button } from "antd";
import React from "react";

const Card = (props) => {
  const { image,title  } = props;

  return (
    <div className=" cardMainContainer">

  
    
     <div className="cardSectionOne">
     <img src={image} className="cardImg"/>
     </div>
   
     <div className="cardSectionTwo">
      <p className="titleone">{title}</p>
      <Button className="cardBtn">Check listings</Button>
     </div>
      
    
    </div>
  );
};

export default Card;