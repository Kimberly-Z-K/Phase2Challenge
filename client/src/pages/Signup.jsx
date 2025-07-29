import React, { useState } from "react";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up Info:", { name, email, password });
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h2 style={styles.title}>🍵 Create Your Account</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #d0e8d0, #f5fbe0)", 
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  container: {
    padding: "40px",
    width: "100%",
    maxWidth: "420px",
    textAlign: "center",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    border: "2px solid #cce3cc",
  },
  title: {
    marginBottom: "30px",
    fontSize: "28px",
    color: "#4e944f", 
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "2px solid #b0d9b1",
    outline: "none",
    backgroundColor: "#f0fdf4",
    color: "#3b7a3a",
    fontWeight: "500",
    transition: "all 0.3s ease",
  },
  button: {
    padding: "12px",
    backgroundColor: "#88c57f",
    color: "#fff",
    fontSize: "17px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default SignUp;

