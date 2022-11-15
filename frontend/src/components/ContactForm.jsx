import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastifyConfig = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

function ContactForm() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitContactForm = (e) => {
    e.preventDefault();
    if (email.includes("@")) {
      toast.success("Message received", toastifyConfig);
    } else {
      toast.error("invalid email", toastifyConfig);
    }
  };

  return (
    <form className="footer-form">
      <div className="mb-2 mt-1 p-2">
        <input
          value={username}
          onChange={(e) => setName(e.target.value)}
          className="input-name w-100 p-2"
          type="text"
          name="name"
          placeholder="Name"
        />
      </div>

      <div className="mb-2 p-2">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-email w-100 p-2"
          type="email"
          name="email"
          placeholder="Adress email"
        />
      </div>

      <div className="mb-2 p-2">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="textarea w-100 p-2"
          placeholder="Enter your message"
        />
      </div>

      <div className="mb-2">
        <button
          className="button w-50 fs-5"
          type="submit"
          onClick={(e) => submitContactForm(e)}
        >
          submit
        </button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </form>
  );
}

export default ContactForm;
