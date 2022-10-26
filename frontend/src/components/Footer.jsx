import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="contact">
      <div className="container-fluid">
        <form className=" form ">
          <div className="container-input ">
            <input
              className="input-name"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>

          <div className="container-input">
            <input
              className="input-email"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>

          <div className=" container-textarea">
            <textarea
              className="textarea"
              cols="23"
              placeholder="Enter your message"
              rows="3"
            />
          </div>

          <div className=" container-button">
            <button className="button" type="submit">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Footer;
