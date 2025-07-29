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
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.profilePic}>
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Selected"
                style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "50%" }}
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

        <h2 style={styles.title}>👤 Profile Settings</h2>

        {editMode && (
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={styles.input}
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
              Notification Threshold:
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
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "linear-gradient(145deg, #eaf2f8, #f6f1eb)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Segoe UI', sans-serif",
  },
  container: {
    backgroundColor: "#ffffff",
    padding: "40px",
    maxWidth: "550px",
    width: "100%",
    borderRadius: "18px",
    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
    border: "2px solid #dde4dc",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  profilePic: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    backgroundColor: "#dbe9e2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#2f4f4f",
    cursor: "pointer",
    fontSize: "32px",
  },
  addPhoto: {
    fontWeight: "bold",
    fontSize: "36px",
    lineHeight: "1",
  },
  editRow: {
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    color: "#556b2f",
    cursor: "pointer",
  },
  title: {
    fontSize: "26px",
    fontWeight: "bold",
    margin: "20px 0",
    color: "#4e5e30",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #cddccd",
    backgroundColor: "#f9fff9",
    color: "#2e4034",
    fontSize: "15px",
  },
  label: {
    textAlign: "left",
    fontSize: "14px",
    color: "#333",
    marginTop: "10px",
  },
  button: {
    padding: "12px",
    backgroundColor: "#ffb6b9", 
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
    transition: "background 0.3s ease",
  },
  card: {
    marginTop: "25px",
    backgroundColor: "#f0f8f6",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "left",
    color: "#3c5f56",
    fontSize: "15px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  },
};

export default Profile;






