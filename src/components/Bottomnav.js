import React from "react";
// Import CSS File Dependency
import "../styles/botNav.css";
import "../styles/footer.css";

function Bottomnav() {
  return (
    <nav className="bottomNav" id="bottomNav">
      <div className="BNMaxW">
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

export default Bottomnav;
