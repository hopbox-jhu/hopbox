import React, { useState } from "react";
import axios from "axios";

function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/signup", { name, email, password });
      alert("Successfully signed up!");
    } catch (error) {
      alert("Error signing up");
    }
  };

  return (
    <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit">Sign up</button>
        </form>
    </div>
  );
}

export default SignUpPage;
