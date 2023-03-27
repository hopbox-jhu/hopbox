import React, { useState } from "react";
import axios from "axios";
import { connect, createUser } from "../../../../server/src/data/db";

function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/signup", { name, email, password });
      await connect(); // Connect to MongoDB
      await createUser({ name, email, password }); // Create user document in MongoDB
      alert("Successfully signed up!");
    } catch (error) {
      alert("Error signing up");
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#eae9f2' }}>
      <h2 style={{ marginBottom: '2rem', color: '#d6008e' }}>Sign Up</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
        <label htmlFor="name" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '1rem' }}>Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          style={{ marginTop: '0.5rem', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #d6008e', width: '100%' }}
        />
        <label htmlFor="email" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '1rem' }}>Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          style={{ marginTop: '0.5rem', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #d6008e', width: '100%' }}
        />
        <label htmlFor="password" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '1rem' }}>Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          style={{ marginTop: '0.5rem', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #d6008e', width: '100%' }}
        />
        <button type="submit" style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#d6008e', color: 'white', borderRadius: '0.25rem', border: 'none', cursor: 'pointer', width: '100%' }}>Sign up</button>
      </form>
    </div>
  );
}

export default SignUpPage;
