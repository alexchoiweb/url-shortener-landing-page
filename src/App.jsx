import React from "react";

import Nav from "./Components/Nav";
import Design from "./Components/Design";

export default function App() {
  return (
    <>
      <Design />
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
    </>
  );
}
