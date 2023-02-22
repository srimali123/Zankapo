import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";

import { Images } from "../../assets/Images/images";
import { useDispatch } from "react-redux";

import { saveSearchData } from "../../Redux/Slices/Search";

export const SearchComponent = ({ advertisments, properties = [] }) => {
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
          style={{
            position: "absolute",
            top: 65,
            width: "100%",
            backgroundColor: "white",
            overflow: "hidden",
            overflowY: "auto",
            zIndex: 1,
          }}
        >
          {filterData?.slice(0, 6).map((item, idx) => {
            return (
              <a
                style={{ padding: "5px" }}
                onClick={() =>
                  navigate(`/buyproduct/${item.id}/${item.category}`)
                }
              >
                {" "}
                <p style={{ marginLeft: "5px" }}>{item.title}</p>{" "}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};
