import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      {/* MENU */}
      <div className="footer-contact d-flex align-items-center justify-content-around">
        <ul className=" footer-list-button d-none d-md-block list-unstyled">
          <li className="mb-3">Home</li>
          <li>Our Cards</li>
          <li></li>
        </ul>
        {/* FORM */}
        <form className=" footer-form w-50 ">
          <div className="container-input w-100 m-3">
            <input
              className="input-name text-center w-100 h-"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>

          <div className="container-input w-100 m-3">
            <input
              className="input-email text-center  w-100 "
              type="email"
              name="email"
              placeholder=" Adress email"
            />
          </div>

          <div className=" container-textarea w-100 m-3 ">
            <textarea
              className="textarea text-center  w-100 "
              placeholder="Enter your message"
            />
          </div>

          <div className=" container-button w-100 m-3 ">
            <button className="button w-50 fs-5 " type="submit">
              submit
            </button>
          </div>
        </form>
        {/* MAP */}
        <div className="">
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
