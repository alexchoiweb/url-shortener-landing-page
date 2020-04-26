import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="Navbar">
      <div className="Logo">
        <img src="../images/logo.svg" alt="" />
      </div>
      <div className="nav-flex-container">
        <div className="nav-buttons-left">
          <button>Features</button>
          <button>Pricing</button>
          <button>Resources</button>
        </div>
        <div className="nav-buttons-right">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    </div>

    <div className="Hero">
      <div className="hero-image-container">
        <div className="side-crop hide-desktop">
          <img src="images/illustration-working.svg" alt="" />
        </div>
      </div>
      <div className="hero-content">
        <h1>More than just shorter links</h1>
        <p className="contentText">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="button-getStarted">Get Started</button>
      </div>
    </div>

    <div className="Input">
      <input type="text" placeholder="Shorten a link here..."></input>
      <button>Shorten it!</button>
    </div>

    <div className="Content">
      <div className="Card center-items-column">
        <h2>Advanced Statistics</h2>
        <p className="contentText">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="content-flex-container">
        <div className="Card">
          <img src="./images/icon-brand-recognition.svg" alt=""></img>
          <h2>Brand Recognition</h2>
          <p className="contentText">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instill confidence in your content.
          </p>
        </div>
        <div className="Card">
          <img src="./images/icon-brand-recognition.svg" alt=""></img>
          <h2>Detailed Records</h2>
          <p className="contentText">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="Card">
          <img src="./images/icon-brand-recognition.svg" alt=""></img>
          <h2>Fully Customizable</h2>
          <p className="contentText">
            Improve brand awareness and content discoverability through
            customizable links, superchargin audience engagement.
          </p>
        </div>
      </div>
      <div className="content-boost center-items-column">
        <h3>Boost your links today</h3>
        <button>Get Started</button>
      </div>
    </div>

    <div className="Footer">
      <div className="footer-logo center-items-row">
        <image src="images/logo.svg" />
        FOOTER LOGO
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
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
