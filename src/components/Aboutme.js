import React from "react";
// Import CSS File Dependency
import "../styles/homepage.css";

//javaScript object
const background = {
  src: "/images/aboutme/fractals.png",
};

function AboutMe() {
  return (
    <section
      className="aboutMe sectionArea"
      style={{ backgroundImage: `url(${background.src})` }}
      id="aboutMe"
    >
      <div className="aboutMeTitle sectionTitle">
        <h2>about me</h2>
      </div>
      <div className="aboutMeText">
        <p>
          My Name is Scott Erwin.
          <br />
          I live & work in Decatur, GA.
          <br />
          I’m currently doing freelance web dev.
          <br />
          with my partner in crime, Paint Cloud.
          <br />
          I’ve worked on email and websites for companies
          <br />
          such as Mercedes AMG, Cigarette Racing Team,
          <br />
          Ehrmann, & AVG (Dainese). Web development
          <br />
          and technology in general, are my true love.
          <br />
          (Plus maybe a little weekend gaming!)
          <br />
          Right now I’m looking for a new
          <br />
          full-time job where I can put
          <br />
          down some roots.
        </p>
      </div>
      <nav>
        <div className="downArrowFG">
          <a href="#skills">
            <img
              src="./images/navigation/arrows/arrowDownTan.png"
              alt="A downward facing Tan arrow"
            />
          </a>
        </div>
        <div className="downArrowBG">
          <img
            src="./images/navigation/arrows/arrowDownGold.png"
            alt="A downward facing Gold arrow"
          />
        </div>
      </nav>
    </section>
  );
}

export default AboutMe;
