import "./App.css";
import React, { useState } from "react";
import MainNavigation from "./components/Navigation/MainNavigation";

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
      
      <p>Hello</p>
    </div>
  );
}

export default App;
