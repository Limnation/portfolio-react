import React from "react";
// Import CSS File Dependency
import "../styles/homepage.css";

export default function Contact() {
  return (
    <section className="contact sectionArea" id="contact">
      <div className="contactTitle sectionTitle">
        <h2>contact</h2>

        <div className="contactBody">
          <div className="contacts contactmargin1">
            <a href="https://goo.gl/maps/g1zT6nVPRrnF3ZJC9">
              <img src="images/contact/address.png" alt="address" />
              <p>
                335 W Ponce de Leon Ave
                <br />
                Decatur, GA 30030
              </p>
            </a>
          </div>
          <div className="contacts contactmargin">
            <a href="mailto:scottallenerwin@gmail.com">
              <img src="images/contact/email.png" alt="Email" />
              <p>scottallenerwin@gmail.com</p>
            </a>
          </div>
          <div className="contacts contactmargin">
            <a href="tel:770-328-2598">
              <img src="images/contact/phone.png" alt="Phone" />
              <p>770-328-2598</p>
            </a>
          </div>
          <div className="contacts contactmargin">
            <a href="https://www.linkedin.com/in/scott-allen-erwin/">
              <img src="images/contact/ln.png" alt="ln" />
              <p>@scott-allen-erwin</p>
            </a>
          </div>
          <div className="contacts contactmargin">
            <a href="https://github.com/Limnation">
              <img src="images/contact/GH.png" alt="github" />
              <p>@limnation</p>
            </a>
          </div>
          <div className="contacts contactmargin">
            <a href="https://www.instagram.com/erwin_scott/">
              <img src="images/contact/IG.png" alt="IG" />
              <p>@erwin_scott</p>
            </a>
          </div>
        </div>
      </div>
      <nav>
        <div className="downArrowFG">
          <a href="#bottomNav">
            <img
              src="./images/navigation/arrows/arrowDownGray.png"
              alt="A downward facing Tan arrow"
            />
          </a>
        </div>
        <div className="downArrowBG">
          <img
            src="./images/navigation/arrows/arrowDownWhite.png"
            alt="A downward facing Gray arrow"
          />
        </div>
      </nav>
    </section>
  );
}
