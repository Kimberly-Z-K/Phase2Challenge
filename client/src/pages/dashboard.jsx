import React, { useEffect, useState } from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const dummyAlerts = [
  { id: 1, timestamp: "2025-07-28T09:30", title: "COVID-19 Spike", status: "critical" },
  { id: 2, timestamp: "2025-07-27T14:15", title: "Flu Season Rising", status: "warning" },
  { id: 3, timestamp: "2025-07-26T11:00", title: "Allergy Alert", status: "info" },
];

const dummyTests = [
  { id: 101, name: "COVID-19 PCR", result: "Positive", date: "2025-07-25" },
  { id: 102, name: "Blood Pressure", result: "Normal", date: "2025-07-26" },
  { id: 103, name: "Diabetes Test", result: "High", date: "2025-07-27" },
];

const chartData = [
  { date: "Jul 25", tests: 5 },
  { date: "Jul 26", tests: 8 },
  { date: "Jul 27", tests: 4 },
  { date: "Jul 28", tests: 9 },
];

function Dashboard() {
  const [alerts, setAlerts] = useState([]);
  const [tests, setTests] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setAlerts(dummyAlerts);
      setTests(dummyTests);
    }, 500);
  }, []);

  return (
    <div style={styles.container}>
      <motion.h2
        style={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Health Monitoring Dashboard
      </motion.h2>

      <div style={styles.grid}>
        {alerts.map((alert) => (
          <motion.div
            key={alert.id}
            style={{ ...styles.card, ...statusColors[alert.status] }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h4>{alert.title}</h4>
            <p>Status: {alert.status}</p>
            <small>{new Date(alert.timestamp).toLocaleString()}</small>
          </motion.div>
        ))}
      </div>

      <h3 style={styles.subHeading}>Recent Diagnostic Tests</h3>
      <motion.table
        style={styles.table}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Test Name</th>
            <th>Result</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {tests.map((test) => (
            <tr key={test.id}>
              <td>{test.id}</td>
              <td>{test.name}</td>
              <td>{test.result}</td>
              <td>{test.date}</td>
            </tr>
          ))}
        </tbody>
      </motion.table>

      <h3 style={styles.subHeading}>Test Activity (Bar Chart)</h3>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="tests" fill="#007BFF" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    maxWidth: "1000px",
    margin: "auto",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "20px",
    textAlign: "center",
  },
  subHeading: {
    marginTop: "40px",
    marginBottom: "10px",
    fontSize: "24px",
  },
  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: "250px",
    padding: "20px",
    borderRadius: "10px",
    color: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    backgroundColor: "#fefefe",
  },
  th: {
    backgroundColor: "#007BFF",
    color: "white",
  },
  td: {
    padding: "10px",
    border: "1px solid #ccc",
  },
};

const statusColors = {
  critical: { backgroundColor: "#dc3545" },
  warning: { backgroundColor: "#ffc107", color: "#000" },
  info: { backgroundColor: "#17a2b8" },
};

export default Dashboard;

