import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import UserInfo from "./UserInfo";
import "./css/DevFinder-styles.css";

const DevFinder = () => {
  const [darkMode, setDarkMode] = useState();

  useEffect(() => {
    darkMode
      ? (document.documentElement.style.setProperty(
          "--silver-white",
          "#141d2f"
        ),
        document.documentElement.style.setProperty("--white", "#1e2a47"),
        document.documentElement.style.setProperty("--font-black", "#ffffff"),
        document.documentElement.style.setProperty("--blue", "#ffffff"),
        document.documentElement.style.setProperty("--dark-blue", "#ffffff"),
        document.documentElement.style.setProperty("--grey", "#ffffff"),
        document.documentElement.style.setProperty("--font-black", "#ffffff"),
        document.documentElement.style.setProperty("--mode-hover", "#90A4D4"),
        document.documentElement.style.setProperty(
          "--hover-filter",
          "var(--hover-filter-blue)"
        ))
      : (document.documentElement.style.setProperty(
          "--silver-white",
          "#f6f8ff"
        ),
        document.documentElement.style.setProperty("--white", "#fefefe"),
        document.documentElement.style.setProperty("-font-black", "#222731"),
        document.documentElement.style.setProperty("--blue", "#4b6a9b"),
        document.documentElement.style.setProperty("--dark-blue", "#2b3442"),
        document.documentElement.style.setProperty("--grey", "#697c9a"),
        document.documentElement.style.setProperty("--font-black", "#222731"),
        document.documentElement.style.setProperty("--mode-hover", "#222731"),
        document.documentElement.style.setProperty(
          "--hover-filter",
          "var(--hover-filter-black)"
        ));
  }, [darkMode]);

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
            darkMode ? setDarkMode(false) : setDarkMode(true);
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
