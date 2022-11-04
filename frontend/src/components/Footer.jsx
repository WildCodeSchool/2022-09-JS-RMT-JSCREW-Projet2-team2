import React from "react";
import "./footer.css";
import MyForm from "./MyForm";

function Footer() {
  return (
    <footer>
      <div className="footer-contact container align-items-center justify-content-around mb-md-0">
        <div className="row ">
          <ul className=" footer-list-button d-none d-md-block list-unstyled col-md-3">
            <li className="mb-3">Home</li>
            <li>Our Cards</li>
          </ul>
          <div className="col-md-6">
            <MyForm />
          </div>
          <div className="d-none d-md-block col-md-3">
            <img id="footer-map" src="../src/assets/footerImgMap.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="footer-coyright bg-dark text-white h-50 p-2">
        Copyright PokeBiz © 2022 - All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;
