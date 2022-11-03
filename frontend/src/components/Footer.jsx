import React from "react";
import "./footer.css";
import MyForm from "./MyForm";

function Footer() {
  return (
    <footer>
      <div className="footer-contact d-flex align-items-center justify-content-around mb-md-0">
        <ul className=" footer-list-button d-none d-md-block list-unstyled">
          <li className="mb-3">Home</li>
          <li>Our Cards</li>
        </ul>
        <MyForm />

        <div className="d-none d-md-block">
          <img id="footer-map" src="../src/assets/footerImgMap.jpg" alt="" />
        </div>
      </div>
      <div className="footer-coyright bg-dark text-white h-50 p-2">
        Copyright PokeBiz © 2022 - All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;
