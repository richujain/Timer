import React, { useState } from "react";
import classes from "./MainNavigation.module.css";
export default function MainNavigation(props) {
  const [showLightButton, setShowLightButton] = useState(true);
  const lightButtonHandler = () => {
    props.onColorThemeHandler(!showLightButton);
    setShowLightButton((showLightButton) => !showLightButton)
  };

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul>
          <li>
            {showLightButton && (
              <img
                className={classes.photo}
                src={require("../../images/dark.png")}
                alt="Color theme toggle"
                onClick={lightButtonHandler}
              />
            )}
            {!showLightButton && (
              <img
                className={classes.photo}
                src={require("../../images/light.png")}
                alt="Color theme toggle"
                onClick={lightButtonHandler}
              />
            )}
          </li>
        
        </ul>
      </nav>
    </header>
  );
}
