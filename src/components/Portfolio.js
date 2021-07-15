import React, { useState } from "react";
// Import CSS File Dependency
import "../styles/homepage.css";
import { devicesImages } from "./Objects";

export default function Portfolio() {
  const [portfolioDevices, setportfolioDevices] = useState(
    devicesImages.default.devices
  );

  const handleMouseOver = () => {
    setportfolioDevices(devicesImages.amg.devices);
  };

  const handleMouseOut = () => {
    setportfolioDevices(devicesImages.default.devices);
  };

  return (
    <section className="portfolio sectionArea" id="portfolio">
      <div className="portfolioTitle sectionTitle">
        <h2>portfolio</h2>
      </div>

      <div className="companies">
        <div className="portfolioImages">
          <img
            onClick="onclickPtItem1();"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="portfolio-item1 portfolio-items"
            src="./images/protfolio/amg.png"
            alt="amg"
          />
          <img
            onClick="onclickPtItem2();"
            onMouseOver="onHoverPtItem2On();"
            onMouseOut="onHoverPtItem2Off();"
            className="portfolio-item2 portfolio-items"
            src="./images/protfolio/cig.png"
            alt="Cigarette Racing Team"
          />
          <img
            onClick="onclickPtItem3();"
            onMouseOver="onHoverPtItem3On();"
            onMouseOut="onHoverPtItem3Off();"
            className="portfolio-item3 portfolio-items"
            src="./images/protfolio/ehrmann.png"
            alt="ehrmann"
          />
          <img
            onClick="onclickPtItem4();"
            onMouseOver="onHoverPtItem4On();"
            onMouseOut="onHoverPtItem4Off();"
            className="portfolio-item4 portfolio-items"
            src="./images/protfolio/agv.png"
            alt="agv"
          />
          <img
            onClick="onclickPtItem5();"
            onMouseOver="onHoverPtItem5On();"
            onMouseOut="onHoverPtItem5Off();"
            className="portfolio-item5 portfolio-items"
            src="./images/protfolio/oml.png"
            alt="OML"
          />
          <img
            onClick="onclickPtItem6();"
            onMouseOver="onHoverPtItem6On();"
            onMouseOut="onHoverPtItem6Off();"
            className="portfolio-item6 portfolio-items"
            src="./images/protfolio/eci.png"
            alt="ECI"
          />
          <img
            onClick="onclickPtItem7();"
            onMouseOver="onHoverPtItem7On();"
            onMouseOut="onHoverPtItem7Off();"
            className="portfolio-item7 portfolio-items"
            src="./images/protfolio/sdc.png"
            alt="Salone Di Capelli"
          />
          <img
            onClick="onclickPtItem8();"
            onMouseOver="onHoverPtItem8On();"
            onMouseOut="onHoverPtItem8Off();"
            className="portfolio-item8 portfolio-items"
            src="./images/protfolio/project1.png"
            alt="project 1"
          />
          <img
            onClick="onclickPtItem9();"
            onMouseOver="onHoverPtItem9On();"
            onMouseOut="onHoverPtItem9Off();"
            className="portfolio-item9 portfolio-items"
            src="./images/protfolio/project2.png"
            alt="project 2"
          />
        </div>
      </div>
      <div className="devices" style={portfolioDevices} id="devices"></div>
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
