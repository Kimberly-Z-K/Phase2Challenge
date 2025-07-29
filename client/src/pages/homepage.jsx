import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaEnvelope, FaBell } from "react-icons/fa";
import { motion } from "framer-motion";

const mockData = [
  { city: "Johannesburg", illness: "Flu", cases: 120 },
  { city: "Cape Town", illness: "Malaria", cases: 50 },
  { city: "Durban", illness: "Flu", cases: 80 },
  { city: "Pretoria", illness: "COVID-19", cases: 200 },
  { city: "Bloemfontein", illness: "Malaria", cases: 30 },
];

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = mockData.filter((item) =>
      item.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div style={styles.background}>
      <motion.div
        style={styles.container}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          style={styles.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          🌍 Health Monitor
        </motion.h1>

        <motion.div
          style={styles.navGrid}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link to="/dashboard" style={styles.navItem}>
            <FaTachometerAlt size={50} color="#00A86B" />
            <span>Dashboard</span>
          </Link>
          <Link to="/messages" style={styles.navItem}>
            <FaEnvelope size={50} color="#1E90FF" />
            <span>Messages</span>
          </Link>
          <Link to="/alerts" style={styles.navItem}>
            <FaBell size={50} color="#FF6B6B" />
            <span>Alerts</span>
          </Link>
        </motion.div>

        <form onSubmit={handleSearch} style={styles.searchForm}>
          <input
            type="text"
            placeholder="🔎 Search for city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
          <button type="submit" style={styles.searchButton}>
            Go
          </button>
        </form>

        {results.length > 0 && (
          <motion.div
            style={styles.results}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 style={styles.resultsTitle}>🔬 Search Results:</h3>
            <ul style={styles.resultList}>
              {results.map((item, idx) => (
                <motion.li
                  key={idx}
                  style={styles.resultItem}
                  whileHover={{ scale: 1.05 }}
                >
                  <strong>{item.city}</strong> - {item.illness}:{" "}
                  <span style={{ fontWeight: "bold", color: "#00A86B" }}>
                    {item.cases} cases
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

const styles = {
  background: {
    background: "linear-gradient(to right, #f0fdf4, #e0f7fa)",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
  },
  container: {
    maxWidth: "800px",
    width: "100%",
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.9)",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    color: "#2e7d32",
    marginBottom: "50px",
    textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
  },
  navGrid: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "50px",
    flexWrap: "wrap",
    gap: "30px",
  },
  navItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textDecoration: "none",
    color: "#333",
    fontSize: "16px",
    transition: "transform 0.3s",
  },
  searchForm: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "30px",
  },
  searchInput: {
    padding: "12px",
    width: "300px",
    borderRadius: "8px",
    fontSize: "16px",
    border: "1px solid #aaa",
    outline: "none",
    backgroundColor: "#f0fff4",
    color: "#1b4332",
    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)",
  },
  searchButton: {
    padding: "12px 24px",
    fontSize: "16px",
    backgroundColor: "#2e7d32",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  },
  results: {
    textAlign: "left",
    marginTop: "20px",
  },
  resultsTitle: {
    fontSize: "22px",
    marginBottom: "10px",
    color: "#2e7d32",
  },
  resultList: {
    listStyle: "none",
    padding: 0,
  },
  resultItem: {
    backgroundColor: "#f0fff4",
    padding: "10px 15px",
    borderRadius: "8px",
    marginBottom: "10px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  },
};

export default HomePage;
