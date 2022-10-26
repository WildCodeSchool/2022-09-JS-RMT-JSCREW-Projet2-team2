import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div>
      <div className="navbar-test">
        <h1>Test contenu</h1>
      </div>
      <div className="navbar-bg">
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
    </div>
  );
}

export default Navbar;
