import React from "react";
import "./Search.css";
import Restaurants from "./Restaurants"
import SearchIcon from "@mui/icons-material/Search";
// import MenuData from "./Data.json"

function Search({ placeholder, data }) {
  return (
    <div className="Search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Search Here"
          // data={MenuData}
        />
        <div className="searchIcon">
          <SearchIcon />
        </div>
      </div>
      <Restaurants />
      <div className="dataResult"></div>
    </div>
  );
}

export default Search;
