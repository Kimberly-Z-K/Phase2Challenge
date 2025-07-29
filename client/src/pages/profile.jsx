import React from "react";
import { FaCog } from "react-icons/fa"; 

function Profile() {
  const user = {
    name: "Zee Khumalo",
    email: "zee@example.com"
  };

  return (
    <div style={styles.container}>
    
      <div style={styles.header}>
        <div style={styles.profilePic}>
          <span style={styles.addPhoto}>+</span>
        </div>
        <div style={styles.editRow}>
          <FaCog size={20} />
          <span style={{ marginLeft: "5px" }}>Edit Profile</span>
        </div>
      </div>

      <h2>{user.name}</h2>
      <p>{user.email}</p>

      <div style={styles.card}>
        <p>This is your profile page.</p>
        <p>You can later edit your info and upload a profile picture.</p>
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
  }
};

export default Profile;

