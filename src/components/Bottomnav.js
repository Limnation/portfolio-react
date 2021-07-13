import React from "react";
// Import CSS File Dependency
import "../styles/bottomNav.css";

function BotNav() {
  return (
    <nav class="bottomNav" id="bottomNav">
      <div class="BNMaxW">
        <h5>Site Map</h5>
        <ul>
          <li>
            <a href="#intro">Intro</a>
          </li>
          <li>
            <a href="#aboutMe">about me</a>
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#portfolio">portfolio</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default BotNav;
