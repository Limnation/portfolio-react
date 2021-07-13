import React from "react";
// Import CSS File Dependency
import "../styles/homepage.css";

function Skills() {
  return (
    <section class="skills sectionArea" id="skills">
      <div class="skillsTitle sectionTitle">
        <h2>Skills</h2>
      </div>
      <div class="skillImag1">
        <img
          class="skill-item1 skill-items"
          src="./images/skills/html.png"
          alt="HTML"
        />
        <img
          class="skill-item2 skill-items"
          src="./images/skills/css.png"
          alt="CSS"
        />
        <img
          class="skill-item3 skill-items"
          src="./images/skills/js.png"
          alt="JS"
        />
        <img
          class="skill-item4 skill-items"
          src="./images/skills/php.png"
          alt="PHP"
        />
        <img
          class="skill-item5 skill-items"
          src="./images/skills/jquery.png"
          alt="jQuery"
        />
        <img
          class="skill-item6 skill-items"
          src="./images/skills/ajax.png"
          alt="ajax"
        />
        <img
          class="skill-item7 skill-items"
          src="./images/skills/react.png"
          alt="react.js"
        />
        <img
          class="skill-item8 skill-items"
          src="./images/skills/visualstudio.png"
          alt="visual studio"
        />
        <img
          class="skill-item9 skill-items"
          src="./images/skills/java.png"
          alt="java"
        />
      </div>
      <nav>
        <div class="downArrowFG">
          <a href="#portfolio">
            <img
              src="./images/navigation/arrows/arrowDownGold.png"
              alt="A downward facing Gold arrow"
            />
          </a>
        </div>
        <div class="downArrowBG">
          <img
            src="./images/navigation/arrows/arrowDownblue.png"
            alt="A downward facing Blue arrow"
          />
        </div>
      </nav>
    </section>
  );
}

export default Skills;
