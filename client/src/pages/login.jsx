import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Info:", { email, password });
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h2 style={styles.title}>🍃 Welcome Back</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
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
          <button type="submit" style={styles.button}>Log In</button>
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
    background: "linear-gradient(to right, #e0f2d8, #d0e8d0)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  container: {
    padding: "40px",
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    border: "2px solid #cce3cc",
    textAlign: "center",
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

export default Login;

