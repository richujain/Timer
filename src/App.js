import "./App.css";
import React, { useState, useEffect } from "react";
import MainNavigation from "./components/Navigation/MainNavigation";
import Timer from "./components/Timer/Timer";


function App() {
  useEffect(() => {
    document.title = 'Digital Timer : Richu Jain';
  });
  const [isLight, setIsLight] = useState(true);
  const colorThemeHandler = () => {
    setIsLight((isLight) => !isLight);
  };
  isLight? document.body.style.backgroundColor = 'white' : document.body.style.backgroundColor = '#4b4b4b'
  return (
    
    <div>
      <MainNavigation
        onColorThemeHandler={colorThemeHandler}
      />
      <Timer light={isLight}/>
    </div>
  );
}

export default App;
