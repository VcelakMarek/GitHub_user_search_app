import "./css/SearchBar-styles.css";

const SearchBar = () => {
  return (
    <>
      <div id="search-bar" className="card">
        <div className="search-line">
          <img src="./assets/icon-search.svg" alt="icon-search" />
          <input type="text" placeholder="Search GitHub username…" />
          <button>Search </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
