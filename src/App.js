import "./App.css";
import React, { useState } from "react";
import MainNavigation from "./components/Navigation/MainNavigation";
import Timer from "./components/Timer/Timer";

function App() {
  const [isLight, setIsLight] = useState(true);
  const [isQuotesActive, setIsQuotesActive] = useState(false);
  const colorThemeHandler = () => {
    setIsLight((isLight) => !isLight);
    
  };
  const showQuotesHandler = () => {
    setIsQuotesActive((isQuotesActive) => !isQuotesActive);
  };

  return (
    <div
      style={
        isLight ? { backgroundColor: "white" } : { backgroundColor: "#4b4b4b" }
      }
    >
      <MainNavigation
        onColorThemeHandler={colorThemeHandler}
        onShowQuotesHandler={showQuotesHandler}
      />
      <Timer/>
    </div>
  );
}

export default App;
