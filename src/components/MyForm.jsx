import React, { useEffect, useState } from "react";
import "../index.css";
const MyForm = ({ onGet }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGet(name, email);
  };

  return (
    <div className="myform">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Name"
          id="name"
          onChange={handleChangeName}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Email"
          id="email"
          onChange={(e) => handleChangeEmail(e)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyForm;
