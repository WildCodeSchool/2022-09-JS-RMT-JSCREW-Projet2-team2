import React from "react";
import "./footer.css";
import MyForm from "./MyForm";

function Footer() {
  return (
    <footer>
      <div className="footer-contact container-fluid align-items-center justify-content-around mb-md-0">
        <div className="row ">
          <ul className="footer-list-button d-none d-md-block list-unstyled col-md-3 my-auto">
            <li className="mb-3">Home</li>
            <li>Our Cards</li>
          </ul>
          <div className="col-12 d-md-block col-md-3 my-auto order-md-last d-none">
            <img
              id="footer-map"
              src="../src/assets/footerImgMap.jpg"
              alt="Map"
            />
          </div>
          <div className="col-md-6 col-12">
            <MyForm />
          </div>
        </div>
      </div>
      <div className="footer-copyright bg-dark text-white h-50 p-2">
        Copyright PokeBiz © 2022 - All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;
