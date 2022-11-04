import React, { useState } from "react";

function MyForm() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form className="footer-form">
      <div className="mb-2 mt-1 p-2">
        <input
          value={username}
          onChange={(e) => setName(e.target.value)}
          className="input-name w-100"
          type="text"
          name="name"
          placeholder="Name"
        />
      </div>

      <div className="mb-2 p-2">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-email w-100"
          type="email"
          name="email"
          placeholder="Adress email"
        />
      </div>

      <div className="mb-2 p-2">
        <textarea className="textarea w-100" placeholder="Enter your message" />
      </div>

      <div className="mb-2">
        <button className="button w-50 fs-5" type="submit">
          submit
        </button>
      </div>
    </form>
  );
}

export default MyForm;
