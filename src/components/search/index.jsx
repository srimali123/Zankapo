import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";

import { Images } from "../../assets/Images/images";
import { useDispatch } from "react-redux";

import { saveSearchData } from "../../Redux/Slices/Search";

export const SearchComponent = ({ advertisments, properties = [],positionHome, bgColor }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filterData, setFilterData] = useState([]);
  const searchHandler = (text) => {
    const suggetions = advertisments.filter((value) => {
      return value.title.toLowerCase().includes(text.toLowerCase());
    });

    if (text === "") {
      setFilterData([]);
    } else {
      setFilterData(suggetions);
      console.log(suggetions);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("calling");
      const searchText = e.target.value;
      const suggetions = advertisments.filter((value) => {
        return value.title.toLowerCase().includes(searchText.toLowerCase());
      });

      if (searchText === "") {
        console.log("empty");
      } else {
        dispatch(saveSearchData(suggetions));
        navigate(`/search/${searchText}`);
      }
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="whiteSection">
        <Input
          placeholder="What do you want to buy?"
          className="searchTextInput"
          onChange={(e) => searchHandler(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <img src={Images.common.search} className="search" />
      </div>
      {filterData.length !== 0 && (
        <div
          className="suggetions"
          style={{position:positionHome? "absolute" : " fixed", backgroundColor:bgColor
          ,}}
        >
          {filterData?.slice(0, 6).map((item, idx) => {
            return (
              <a
               className=""
                onClick={() =>
                  navigate(`/buyproduct/${item.id}/${item.category}`)
                }
              >
                <div className="serchItemRow">
                <img
                            src={Images.populaAd.ad2}
                            className="serchItemImg"
                            onClick={(e) => e.preventDefault()}
                          />
                <p className="serchtitle">{item.title}</p>{" "}
                </div>
                {" "}
               
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};
