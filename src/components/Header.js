import React, { useState } from "react";
// Import CSS File Dependency
import "../styles/topNav.css";
import "../styles/homepage.css";

//javaScript object
const background = {
  heroSection: {
    backgroundImage: "url(/images/header/heroImage.png)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundRize: "cover",
    position: "relative",
  },
};

const background2 = {
  heroSection: {
    backgroundImage: "url(/images/header/heroImage2.png)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundRize: "cover",
    position: "relative",
  },
};

const heroTextDisplay = {
  show: "heroText",
  hide: "heroText heroTextDistplay",
};

const navOptions = {
  desktop: "topnav",
  mobile: "topnav responsive",
  none: "#mobile",
};

export default function Header() {
  const [heroImage1, heroImage2] = useState(background.heroSection);
  const [heroText, heroText2] = useState(heroTextDisplay.show);
  const [desktopNav, mobileNav] = useState(navOptions.desktop);

  const handleMouseOver = () => {
    heroImage2(background2.heroSection);
    heroText2(heroTextDisplay.hide);
  };

  const handleMouseOut = () => {
    heroImage2(background.heroSection);
    heroText2(heroTextDisplay.show);
  };

  const handleOnClick = () => {
    if (desktopNav === navOptions.desktop) {
      mobileNav(navOptions.mobile);
    } else {
      mobileNav(navOptions.desktop);
    }
  };

  return (
    <header className="heroSection" style={heroImage1} id="intro">
      <nav className={desktopNav} id="myTopnav">
        <a href={navOptions.none} className="active">
          <img
            src="images/navigation/top/navLogo.png"
            alt="Scott Allen Erwin"
          />
        </a>
        <a
          className="navBar"
          id="#portfolioNav"
          href="#portfolio"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          portfolio
        </a>
        <a
          className="navBar"
          href="#aboutMe"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          about me
        </a>
        <a
          className="navBar"
          href="#contact"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          contact
        </a>
        <a href={navOptions.none} className="icon" onClick={handleOnClick}>
          &#9776;
        </a>
      </nav>
      <div className={heroText} id="heroText">
        <h1>Scott Allen Erwin</h1>
        <h3>Senior Web Specialist</h3>
      </div>
      <div className="heroSocialLinks">
        <a href="mailto:scottallenerwin@gmail.com">
          <img src="./images/header/email.png" alt="E-mail" />
        </a>
        <a href="tel:770-328-2598">
          <img src="./images/header/phone.png" alt="Phonenumber 770-328-2598" />
        </a>
        <a href="https://www.linkedin.com/in/scott-erwin-b755b097/">
          <img src="./images/header/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://www.facebook.com/scott.erwin2/">
          <img src="./images/header/facebookLogo.png" alt="Facebook" />
        </a>
      </div>
      <nav>
        <div className="downArrowFG">
          <a href="#aboutMe">
            <img
              src="./images/navigation/arrows/arrowDownRed.png"
              alt="A downward facing red arrow"
            />
          </a>
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
