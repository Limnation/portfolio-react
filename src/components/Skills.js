import React from "react";
// Import CSS File Dependency
import "../styles/homepage.css";

export default function Skills() {
  return (
    <section className="skills sectionArea" id="skills">
      <div className="skillsTitle sectionTitle">
        <h2>Skills</h2>
      </div>
      <div className="skillImag1">
        <img
          className="skill-item1 skill-items"
          src="./images/skills/html.png"
          alt="HTML"
        />
        <img
          className="skill-item2 skill-items"
          src="./images/skills/css.png"
          alt="CSS"
        />
        <img
          className="skill-item3 skill-items"
          src="./images/skills/js.png"
          alt="JS"
        />
        <img
          className="skill-item4 skill-items"
          src="./images/skills/php.png"
          alt="PHP"
        />
        <img
          className="skill-item5 skill-items"
          src="./images/skills/jquery.png"
          alt="jQuery"
        />
        <img
          className="skill-item6 skill-items"
          src="./images/skills/ajax.png"
          alt="ajax"
        />
        <img
          className="skill-item7 skill-items"
          src="./images/skills/react.png"
          alt="react.js"
        />
        <img
          className="skill-item8 skill-items"
          src="./images/skills/visualstudio.png"
          alt="visual studio"
        />
        <img
          className="skill-item9 skill-items"
          src="./images/skills/java.png"
          alt="java"
        />
      </div>
      <nav>
        <div className="downArrowFG">
          <a href="#portfolio">
            <img
              src="./images/navigation/arrows/arrowDownGold.png"
              alt="A downward facing Gold arrow"
            />
          </a>
        </div>
        <div className="downArrowBG">
          <img
            src="./images/navigation/arrows/arrowDownblue.png"
            alt="A downward facing Blue arrow"
          />
        </div>
      </nav>
    </section>
  );
}
