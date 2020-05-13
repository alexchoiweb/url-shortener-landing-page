import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

import App from "./App.jsx";

ReactDOM.render(
  <React.StrictMode>
    <App />

    <div className="Content">
      <div className="Content__inputContainer">
        <input
          className="Content__input"
          type="text"
          placeholder="Shorten a link here..."
        ></input>
        <button className="Content__inputButton button-cta">Shorten it!</button>
      </div>
      {/* <div className="inputActiveState"></div> */}

      {/* <div className="backgroundLine">
        <p></p>
        <p></p>
      </div> */}

      <div className="Content__header center-items-column">
        <h2>Advanced Statistics</h2>
        <p className="contentText">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="Content__cardsContainer">
        <div className="Content__card">
          <div className="circle">
            <img src="./images/icon-brand-recognition.svg" alt=""></img>
          </div>
          <div className="Content__cardText">
            <h2>Brand Recognition</h2>
            <p className="contentText">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instill confidence in your
              content.
            </p>
          </div>
        </div>
        <div className="Content__card">
          <div className="circle">
            <img src="./images/icon-detailed-records.svg" alt=""></img>
          </div>
          <div className="Content__cardText">
            <h2>Detailed Records</h2>
            <p className="contentText">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>
        <div className="Content__card">
          <div className="circle">
            <img src="./images/icon-fully-customizable.svg" alt=""></img>
          </div>
          <div className="Content__cardText">
            <h2>Fully Customizable</h2>
            <p className="contentText">
              Improve brand awareness and content discoverability through
              customizable links, superchargin audience engagement.
            </p>
          </div>
        </div>
      </div>

      <div className="Content__cta center-items-column">
        <h3>Boost your links today</h3>
        <button className="Content__ctaButton button-cta">Get Started</button>
      </div>
    </div>
    {/* <div className="Footer">
      <div className="footer-logo center-items-row">
        <img src="images/logo.svg" alt="" />
      </div>
      <div className="footer-flex-container">
        <div className="footer-features center-items-column">
          <h3>Features</h3>
          <p>Link shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>
        <div className="footer-resources center-items-column">
          <h3>Resources</h3>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>
        <div className="footer-company center-items-column">
          <h3>Company</h3>
          <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div className="footer-logos center-items-row">
          <span>
            <img src="images/icon-facebook.svg" alt=""></img>{" "}
          </span>
          <span>
            <img src="images/icon-facebook.svg" alt=""></img>{" "}
          </span>
          <span>
            <img src="images/icon-facebook.svg" alt=""></img>{" "}
          </span>
          <span>
            <img src="images/icon-facebook.svg" alt=""></img>{" "}
          </span>
        </div>
      </div>
    </div> */}
  </React.StrictMode>,
  document.getElementById("root")
);
