import React from "react";

const alertsData = [
  {
    id: 1,
    title: "COVID-19 Spike Detected",
    message: "COVID-19 cases are rapidly increasing in Pretoria. Wear masks and avoid crowded areas.",
    timestamp: "2025-07-28 09:00",
    status: "critical",
    read: false,
  },
  {
    id: 2,
    title: "Flu Outbreak in Durban",
    message: "Flu cases have been reported in high numbers. Recommended: get a flu shot and rest if sick.",
    timestamp: "2025-07-27 13:45",
    status: "warning",
    read: true,
  },
  {
    id: 3,
    title: "Malaria Risk in Cape Town",
    message: "New cases of Malaria reported. Use insect repellent and avoid stagnant water areas.",
    timestamp: "2025-07-26 17:30",
    status: "info",
    read: false,
  },
  {
    id: 4,
    title: "Diagnostic System Maintenance",
    message: "The diagnostic test system will be offline for updates from 2AM to 4AM.",
    timestamp: "2025-07-25 22:00",
    status: "info",
    read: true,
  },
];

function Alerts() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Alerts</h2>
      {alertsData.map((alert) => (
        <div
          key={alert.id}
          style={{
            ...styles.alertBox,
            ...(alert.read ? styles.readAlert : styles.unreadAlert),
            ...statusColors[alert.status],
          }}
        >
          <h3>{alert.title}</h3>
          <p>{alert.message}</p>
          <small style={styles.timestamp}>{alert.timestamp}</small>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "auto",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "20px",
    textAlign: "center",
  },
  alertBox: {
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    color: "#fff",
  },
  unreadAlert: {
    border: "3px solid #ff6b6b",
    backgroundColor: "#dc3545",
  },
  readAlert: {
    backgroundColor: "#6c757d",
  },
  timestamp: {
    fontSize: "12px",
    color: "#f1f1f1",
  },
};

const statusColors = {
  critical: { backgroundColor: "#dc3545" }, 
  warning: { backgroundColor: "#ffc107", color: "#000" }, 
  info: { backgroundColor: "#17a2b8" }, 
};

export default Alerts;
