import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import UserInfo from "./UserInfo";
import "./css/DevFinder-styles.css";

const DevFinder = () => {
  const [darkMode, setDarkMode] = useState();

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)")
      ? [setDarkMode(true), setDark()]
      : [setDarkMode(false), setLight];
  }, []);

  return (
    <>
      <header>
        <h1>devfinder</h1>
        <button
          className="mode-select"
          onClick={() => {
            darkMode ? setLight() : setDark();
            setDarkMode(!darkMode);
          }}
        >
          {darkMode ? (
            <>
              <p>LIGHT</p>
              <img src="./icon-sun.svg" alt="icon-sun" />
            </>
          ) : (
            <>
              <p>DARK</p>
              <img src="./icon-moon.svg" alt="icon-moon" />
            </>
          )}
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
