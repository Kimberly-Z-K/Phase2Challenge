import React, { useState } from "react";
import { FaCog } from "react-icons/fa";

function Profile() {
  const [imagePreview, setImagePreview] = useState(null);
  const [name, setName] = useState("set name");
  const [email, setEmail] = useState("set email");
  const [password, setPassword] = useState("");
  const [editMode, setEditMode] = useState(false);

 
  const [notificationThreshold, setNotificationThreshold] = useState(10);
  const [darkMode, setDarkMode] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
    // You can add validation or backend update logic here
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.profilePic}>
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Selected"
              style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "50%" }}
            />
          ) : (
            <span style={styles.addPhoto}>+</span>
          )}
        </div>

        <div style={styles.editRow} onClick={() => setEditMode(!editMode)}>
          <FaCog size={20} />
          <span style={{ marginLeft: "5px" }}>Edit Profile</span>
        </div>
      </div>

      <h2>Profile</h2>

      {editMode && (
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ marginBottom: "10px" }}
          />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={styles.input}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={styles.input}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={styles.input}
          />

          <label style={styles.label}>
            Notification Threshold (cases):
            <input
              type="number"
              value={notificationThreshold}
              onChange={(e) => setNotificationThreshold(Number(e.target.value))}
              style={styles.input}
            />
          </label>

          <label style={styles.label}>
            Dark Mode:
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              style={{ marginLeft: "10px" }}
            />
          </label>

          <button type="submit" style={styles.button}>Save</button>
        </form>
      )}

      <div style={styles.card}>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        {password && <p><strong>Password:</strong> ******</p>}
        <p><strong>Notification Threshold:</strong> {notificationThreshold} cases</p>
        <p><strong>Dark Mode:</strong> {darkMode ? "On" : "Off"}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    maxWidth: "500px",
    margin: "auto",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px"
  },
  profilePic: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "#ddd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    color: "#555",
    position: "relative"
  },
  addPhoto: {
    fontSize: "28px",
    fontWeight: "bold",
    cursor: "pointer"
  },
  editRow: {
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    cursor: "pointer",
    color: "#333"
  },
  card: {
    marginTop: "20px",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 0 5px rgba(0,0,0,0.05)"
  },
  form: {
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px"
  },
  label: {
    fontSize: "14px",
    marginTop: "10px",
    textAlign: "left"
  },
  button: {
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px"
  }
};

export default Profile;




