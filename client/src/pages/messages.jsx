import React from "react";

const fakeMessages = [
  {
    id: 1,
    sender: "Dr. Adams",
    message: "COVID-19 cases are rising in Johannesburg. Please wear a mask and avoid large gatherings.",
    timestamp: "2025-07-28 09:12",
  },
  {
    id: 2,
    sender: "HealthBot",
    message: "Reminder: It's flu season in Durban. Get your flu shot if you haven't already.",
    timestamp: "2025-07-27 18:40",
  },
  {
    id: 3,
    sender: "Dr. Naidoo",
    message: "Malaria risk detected in Cape Town. Make sure to use mosquito nets and repellents.",
    timestamp: "2025-07-27 08:30",
  },
  {
    id: 4,
    sender: "System Alert",
    message: "New diagnostic test results have been uploaded to your profile.",
    timestamp: "2025-07-26 22:15",
  },
  {
    id: 5,
    sender: "Dr. Smith",
    message: "Your recent test for diabetes returned a high reading. Please schedule a follow-up appointment.",
    timestamp: "2025-07-25 11:00",
  },
];

function Messages() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Messages</h2>
      {fakeMessages.map((msg) => (
        <div key={msg.id} style={styles.messageCard}>
          <p><strong>{msg.sender}</strong></p>
          <p>{msg.message}</p>
          <small style={styles.timestamp}>{msg.timestamp}</small>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "20px",
    textAlign: "center",
  },
  messageCard: {
    backgroundColor: "#f1f9ff",
    border: "1px solid #b6d4fe",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "15px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  timestamp: {
    color: "#666",
    fontSize: "12px",
  },
};

export default Messages;
