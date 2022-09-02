import React from "react";
import classes from "./MainNavigation.module.css";
export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul>
          <li>
              <button>Dark</button>
          </li>
          <li>
               <button>Quotes</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
