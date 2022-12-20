import SearchBar from "./SearchBar";
import UserInfo from "./UserInfo";
import "./css/DevFinder-styles.css";

const DevFinder = () => {
  return (
    <>
      <header>
        <h1>devfinder</h1>
        <button className="mode-select">
          {/* <p>LIGHT</p> */}
          {/* <img src="./assets/icon-sun.svg" alt="icon-sun" /> */}
          <p>DARK</p>
          <img src="./assets/icon-moon.svg" alt="icon-moon" />
        </button>
      </header>
      <section className="content">
        <SearchBar />
        <UserInfo />
      </section>
    </>
  );
};

export default DevFinder;
