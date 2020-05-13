import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

import App from "./App.jsx";

ReactDOM.render(
  <React.StrictMode>
    <App />

    <div className="Footer">
      <div className="Footer__container">
        <div className="Footer__logo ">
          <img class="Footer__logo-img" src="images/logo.svg" alt="" />
        </div>
        <div className="Footer__container-links">
          <div className="Footer__features">
            <h3>Features</h3>
            <p>Link shortening</p>
            <p>Branded Links</p>
            <p>Analytics</p>
          </div>
          <div className="Footer__resources ">
            <h3>Resources</h3>
            <p>Blog</p>
            <p>Developers</p>
            <p>Support</p>
          </div>
          <div className="Footer__company ">
            <h3>Company</h3>
            <p>About</p>
            <p>Our Team</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>
          <div className="Footer__social ">
            <span>
              <img src="images/icon-facebook.svg" alt=""></img>{" "}
            </span>
            <span>
              <img src="images/icon-twitter.svg" alt=""></img>{" "}
            </span>
            <span>
              <img src="images/icon-pinterest.svg" alt=""></img>{" "}
            </span>
            <span>
              <img src="images/icon-instagram.svg" alt=""></img>{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
