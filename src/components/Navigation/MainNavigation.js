import React, { useState } from "react";
import classes from "./MainNavigation.module.css";
export default function MainNavigation(props) {
  const [showLightButton, setShowLightButton] = useState(true);
  const [showActiveQuote, setShowActiveQuote] = useState(false);
  const lightButtonHandler = () => {
    console.log(showLightButton)
    props.onColorThemeHandler(!showLightButton);
    setShowLightButton((showLightButton) => !showLightButton)
  };
  const showActiveQuoteHandler = (showActiveQuote) => {
    setShowActiveQuote((showActiveQuote) => !showActiveQuote)
    props.onShowQuotesHandler();
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
          <li>
            {!showActiveQuote && (
              <img
                className={classes.photo}
                src={!showLightButton ? require("../../images/quotes_white.png") : require("../../images/quotes.png")}
                alt="Color theme toggle"
                onClick={showActiveQuoteHandler}
              />
            )}
            {showActiveQuote && (
              <img
                className={classes.photo}
                src={require("../../images/quotes_active.png")}
                alt="Color theme toggle"
                onClick={showActiveQuoteHandler}
              />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
