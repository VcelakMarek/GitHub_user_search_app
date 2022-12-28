import { useContext, useEffect, useState } from "react";
import fetchGitHubUser from "./fetchGitHubUser";
import userDataContext from "./userData.context";
import "./css/SearchBar-styles.css";

const SearchBar = () => {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useContext(userDataContext);

  useEffect(() => {
    fetchGitHubUser("octocat", setUserData);
  }, []);

  return (
    <>
      <div id="search-bar" className="card">
        <div className="search-line">
          <img src="./assets/icon-search.svg" alt="icon-search" />
          <label htmlFor="search-username">
            <input
              type="text"
              id="search-username"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              onKeyUp={(e) => {
                if (e.key === "Enter") fetchGitHubUser(userName, setUserData);
              }}
              placeholder={userData != 404 ? "Search GitHub username…" : ""}
            />
            {userData === 404 && <p>No results</p>}
          </label>

          <button
            onClick={(e) => {
              fetchGitHubUser(userName, setUserData), e.preventDefault();
            }}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
