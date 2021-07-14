import React from "react";
// Import CSS File Dependency
import "../styles/homepage.css";

//javaScript object
const background = {
  src: "/images/protfolio/devices.png",
};

export default function Portfolio() {
  return (
    <section
      className="portfolio sectionArea"
      style={{ backgroundImage: `url(${background.src})` }}
      id="portfolio"
    >
      <div className="portfolioTitle sectionTitle">
        <h2>portfolio</h2>
      </div>

      <div className="companies">
        <div className="portfolioImages">
          <img
            onclick="onclickPtItem1();"
            onmouseover="onHoverPtItem1On();"
            onmouseout="onHoverPtItem1Off();"
            className="portfolio-item1 portfolio-items"
            src="./images/protfolio/amg.png"
            alt="amg"
          />
          <img
            onclick="onclickPtItem2();"
            onmouseover="onHoverPtItem2On();"
            onmouseout="onHoverPtItem2Off();"
            className="portfolio-item2 portfolio-items"
            src="./images/protfolio/cig.png"
            alt="Cigarette Racing Team"
          />
          <img
            onclick="onclickPtItem3();"
            onmouseover="onHoverPtItem3On();"
            onmouseout="onHoverPtItem3Off();"
            className="portfolio-item3 portfolio-items"
            src="./images/protfolio/ehrmann.png"
            alt="ehrmann"
          />
          <img
            onclick="onclickPtItem4();"
            onmouseover="onHoverPtItem4On();"
            onmouseout="onHoverPtItem4Off();"
            className="portfolio-item4 portfolio-items"
            src="./images/protfolio/agv.png"
            alt="agv"
          />
          <img
            onclick="onclickPtItem5();"
            onmouseover="onHoverPtItem5On();"
            onmouseout="onHoverPtItem5Off();"
            className="portfolio-item5 portfolio-items"
            src="./images/protfolio/oml.png"
            alt="OML"
          />
          <img
            onclick="onclickPtItem6();"
            onmouseover="onHoverPtItem6On();"
            onmouseout="onHoverPtItem6Off();"
            className="portfolio-item6 portfolio-items"
            src="./images/protfolio/eci.png"
            alt="ECI"
          />
          <img
            onclick="onclickPtItem7();"
            onmouseover="onHoverPtItem7On();"
            onmouseout="onHoverPtItem7Off();"
            className="portfolio-item7 portfolio-items"
            src="./images/protfolio/sdc.png"
            alt="Salone Di Capelli"
          />
          <img
            onclick="onclickPtItem8();"
            onmouseover="onHoverPtItem8On();"
            onmouseout="onHoverPtItem8Off();"
            className="portfolio-item8 portfolio-items"
            src="./images/protfolio/project1.png"
            alt="project 1"
          />
          <img
            onclick="onclickPtItem9();"
            onmouseover="onHoverPtItem9On();"
            onmouseout="onHoverPtItem9Off();"
            className="portfolio-item9 portfolio-items"
            src="./images/protfolio/project2.png"
            alt="project 2"
          />
        </div>
      </div>
      <div className="devices" id="devices"></div>
      <nav>
        <div className="downArrowFG">
          <a href="#contact">
            <img
              src="./images/navigation/arrows/arrowDownblue.png"
              alt="A downward facing blue arrow"
            />
          </a>
        </div>
        <div className="downArrowBG">
          <img
            src="./images/navigation/arrows/arrowDownGray.png"
            alt="A downward facing gray arrow"
          />
        </div>
      </nav>
    </section>
  );
}
