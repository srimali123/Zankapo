import { Button } from "antd";
import React from "react";

const Card = (props) => {
  const { image,title,imgStyle, card1one, card1Two,cardOneMain,cardOneImg,btnText  } = props;

  return (
    <div className=" cardMainContainer" style={{cardOneMain}}>


    
     <div className="cardSectionOne">

     <img src={image} className="cardImg"
    style={{cardOneImg}}
     />
     </div>
   
     <div className="cardSectionTwo" >
     {card1Two}
      <p className="titleone">{title}</p>
      <Button className="cardBtn" >
      {btnText}
        Check listings</Button>
     </div>
      
    
    </div>
  );
};

export default Card;