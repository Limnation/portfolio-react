import React, { useState } from "react";
// Import CSS File Dependency
import "../styles/homepage.css";
import { companies } from "./Objects";

export default function Portfolio() {
  const [portfolioDevices, setportfolioDevices] = useState(
    companies.default.devices
  );

  const handleMouseOver = () => {
    setportfolioDevices(companies.amg.devices);
  };

  const handleMouseOut = () => {
    setportfolioDevices(companies.default.devices);
  };

  return (
    <section className="portfolio sectionArea" id="portfolio">
      <div className="portfolioTitle sectionTitle">
        <h2>portfolio</h2>
      </div>

      <div className="companies">
        <div className="portfolioImages">
          <img
            onClick={()=> window.open(companies.amg.site, "_blank")}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="portfolio-item1 portfolio-items"
            src="./images/protfolio/amg.png"
            alt="amg"
          />
          <img
            onClick={()=> window.open(companies.cig.site, "_blank")}
            onMouseOver="onHoverPtItem2On();"
            onMouseOut="onHoverPtItem2Off();"
            className="portfolio-item2 portfolio-items"
            src="./images/protfolio/cig.png"
            alt="Cigarette Racing Team"
          />
          <img
            onClick={()=> window.open(companies.ehrmann.site, "_blank")}
            onMouseOver="onHoverPtItem3On();"
            onMouseOut="onHoverPtItem3Off();"
            className="portfolio-item3 portfolio-items"
            src="./images/protfolio/ehrmann.png"
            alt="ehrmann"
          />
          <img
            onClick={()=> window.open(companies.agv.site, "_blank")}
            onMouseOver="onHoverPtItem4On();"
            onMouseOut="onHoverPtItem4Off();"
            className="portfolio-item4 portfolio-items"
            src="./images/protfolio/agv.png"
            alt="agv"
          />
          <img
            onClick={()=> window.open(companies.oml.site, "_blank")}
            onMouseOver="onHoverPtItem5On();"
            onMouseOut="onHoverPtItem5Off();"
            className="portfolio-item5 portfolio-items"
            src="./images/protfolio/oml.png"
            alt="OML"
          />
          <img
            onClick={()=> window.open(companies.eci.site, "_blank")}
            onMouseOver="onHoverPtItem6On();"
            onMouseOut="onHoverPtItem6Off();"
            className="portfolio-item6 portfolio-items"
            src="./images/protfolio/eci.png"
            alt="ECI"
          />
          <img
            onClick={()=> window.open(companies.sdc.site, "_blank")}
            onMouseOver="onHoverPtItem7On();"
            onMouseOut="onHoverPtItem7Off();"
            className="portfolio-item7 portfolio-items"
            src="./images/protfolio/sdc.png"
            alt="Salone Di Capelli"
          />
          <img
            onClick={()=> window.open(companies.p1.site, "_blank")}
            onMouseOver="onHoverPtItem8On();"
            onMouseOut="onHoverPtItem8Off();"
            className="portfolio-item8 portfolio-items"
            src="./images/protfolio/project1.png"
            alt="project 1"
          />
          <img
            onClick={()=> window.open(companies.p2.site, "_blank")}
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
