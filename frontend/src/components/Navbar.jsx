import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div>
      {/* NAVBAR - MOBILE */}
      <div className="navbar-mobile">
        <nav className="p-3">
          <ul className="list-unstyled d-flex justify-content-around m-0">
            <li>
              <img
                className="navbar-icon"
                src="./src/assets/logo-black.png"
                alt="logo-icon"
              />
            </li>
            <li>
              <img
                className="navbar-icon"
                src="./src/assets/store-black.png"
                alt="store-icon"
              />
            </li>
            <li>
              <img
                className="navbar-icon"
                src="./src/assets/search-black.png"
                alt="search-icon"
              />
            </li>
            <li>
              <img
                className="navbar-icon"
                src="./src/assets/basket-black.png"
                alt="basket-icon"
              />
            </li>
          </ul>
        </nav>
      </div>
      {/* NAVBAR - DESKTOP */}
      <div className="navbar-test">
        <h1>Test contenu</h1>
      </div>
      <div className="navbar-desktop">
        <nav className="p-3">
          <ul className="list-unstyled d-flex justify-content-between m-0">
            <li>
              <img
                className="navbar-icon"
                src="./src/assets/logo.png"
                alt="logo-icon"
              />
            </li>
            <div className="navbar-desktop-store-icon d-flex">
              <p className="m-0 me-2">Store</p>
              <li>
                <img
                  className="navbar-icon"
                  src="./src/assets/store-orange.png"
                  alt="store-icon"
                />
              </li>
            </div>
            <div className="navbar-desktop-right-icon d-flex">
              <li>
                <img
                  className="navbar-icon"
                  src="./src/assets/search-orange.png"
                  alt="search-icon"
                />
              </li>
              <li>
                <img
                  className="navbar-icon"
                  src="./src/assets/basket-orange.png"
                  alt="basket-icon"
                />
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
