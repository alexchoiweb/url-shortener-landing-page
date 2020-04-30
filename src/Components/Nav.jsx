import React, { useState } from "react";

export default function Nav() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="Nav">
      <img className="Nav__logo" src="../images/logo.svg" alt="" />
      <i
        className=" Nav__icon fa fa-bars"
        aria-hidden="true"
        onClick={() => {
          setShowNav(!showNav);
        }}
      ></i>
      {showNav ? (
        <div className="Nav__buttons">
          <ul className="Nav__buttonsLeft">
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <ul className="Nav__buttonsRight">
            <li>Login</li>
            <li>
              <button className="button-cta">Sign Up</button>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
