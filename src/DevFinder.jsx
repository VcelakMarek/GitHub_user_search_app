import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import UserInfo from "./UserInfo";
import "./css/DevFinder-styles.css";

const DevFinder = () => {
  const [darkMode, setDarkMode] = useState();

  const changeColorMode = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true);

    document.documentElement.style.setProperty("--silver-white", "#141d2f");
    document.documentElement.style.setProperty("--white", "#1e2a47");
    document.documentElement.style.setProperty("--font-black", "#ffffff");
    document.documentElement.style.setProperty("--blue", "#ffffff");
  };

  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)")
      ? setDarkMode(true)
      : setDarkMode(false);
  }, []);

  return (
    <>
      <header>
        <h1>devfinder</h1>
        <button
          className="mode-select"
          onClick={() => {
            changeColorMode();
          }}
        >
          {darkMode ? (
            <>
              <p>LIGHT</p>
              <img src="./assets/icon-sun.svg" alt="icon-sun" />
            </>
          ) : (
            <>
              <p>DARK</p>
              <img src="./assets/icon-moon.svg" alt="icon-moon" />
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
