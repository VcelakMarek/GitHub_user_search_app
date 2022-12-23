import { useState } from "react";
import { createRoot } from "react-dom/client";
import userDataContext from "./userData.context";
import DevFinder from "./DevFinder";

const App = () => {
  const userData = useState("octocat");
  return (
    <>
      <userDataContext.Provider value={userData}>
        <DevFinder />
      </userDataContext.Provider>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
