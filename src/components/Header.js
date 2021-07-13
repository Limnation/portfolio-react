import React from "react";
// Import CSS File Dependency
import "../styles/topNav.css";
import "../styles/homepage.css";

function Header() {
  return (
    <header className="heroSection" id="intro">
      <nav className="topnav" id="myTopnav">
        <a href="index.html" className="active">
          <img
            src="images/navigation/top/navLogo.png"
            alt="Scott Allen Erwin"
          />
        </a>
        <a
          className="navBar"
          id="#portfolioNav"
          href="index.html#portfolio"
          onmouseover="onHover();"
          onmouseout="offHover();"
          >portfolio</a>
        <a
          className="navBar"
          href="index.html#aboutMe"
          onmouseover="onHover();"
          onmouseout="offHover();"
          >about me</a>
        <a
          className="navBar"
          href="index.html#contact"
          onmouseover="onHover();"
          onmouseout="offHover();"
          >contact</a>
        <a href="javascript:void(0);" className="icon" onclick="myClickFunction()"
          >&#9776;</a>
      </nav>
      <div className="heroText" id="heroText">
        <h1>Scott Allen Erwin</h1>
        <h3>Senior Web Specialist</h3>
      </div>
      <div className="heroSocialLinks">
        <a href="mailto:scottallenerwin@gmail.com"
          ><img src="./images/header/email.png" alt="E-mail"
        /></a>
        <a href="tel:770-328-2598"
          ><img src="./images/header/phone.png" alt="Phonenumber 770-328-2598"
        /></a>
        <a href="https://www.linkedin.com/in/scott-erwin-b755b097/"
          ><img src="./images/header/linkedin.png" alt="LinkedIn"
        /></a>
        <a href="https://www.facebook.com/scott.erwin2/"
          ><img src="./images/header/facebookLogo.png" alt="Facebook"
        /></a>
      </div>
      <nav>
        <div className="downArrowFG">
          <a href="#aboutMe"
            ><img
              src="./images/navigation/arrows/arrowDownRed.png"
              alt="A downward facing red arrow"
          /></a>
        </div>
        <div className="downArrowBG">
          <img
            src="./images/navigation/arrows/arrowDownTan.png"
            alt="A downward facing Tan arrow"
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
