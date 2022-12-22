import { useState } from "react";
import "./css/SearchBar-styles.css";

const SearchBar = () => {
  const [searchedUserName, setSearchedUserName] = useState();

  return (
    <>
      <div id="search-bar" className="card">
        <div className="search-line">
          <img src="./assets/icon-search.svg" alt="icon-search" />
          <label htmlFor="search-username">
            <input
              type="text"
              id="search-username"
              value={searchedUserName}
              onChange={(e) => {
                setSearchedUserName(e.target.value);
              }}
              placeholder="Search GitHub username…"
            />
          </label>
          <p className="hidden">No results</p>
          <button>Search </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
