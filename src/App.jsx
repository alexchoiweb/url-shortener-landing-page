import React from "react";

import Nav from "./Components/Nav";
import URLInput from "./Components/URLInput";
import Footer from "./Components/Footer";
import Design from "./Components/Design";

export default function App() {
  return (
    <>
      {/* <Design /> */}
      <Nav />
      <div className="Hero">
        <div className="Hero__imageContainer side-crop">
          <img src="images/illustration-working.svg" alt="" />
        </div>
        <div className="Hero__content">
          <h1 className="Hero__contentHeader">More than just shorter links</h1>
          <p className="Hero__contentText">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="button-cta">Get Started</button>
        </div>
      </div>
      <div className="Content">
        <URLInput />
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
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instill confidence in
                your content.
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
      <Footer />
    </>
  );
}
