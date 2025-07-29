import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaEnvelope, FaBell, FaCog } from "react-icons/fa";

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
    <div style={styles.container}>
      <h1>Welcome to Your Dashboard</h1>

     
      <form onSubmit={handleSearch} style={styles.searchForm}>
        <input
          type="text"
          placeholder="Search for city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
        <button type="submit" style={styles.searchButton}>Search</button>
      </form>

   
      {results.length > 0 && (
        <div style={styles.results}>
          <h3>Search Results:</h3>
          <ul>
            {results.map((item, idx) => (
              <li key={idx}>
                <strong>{item.city}</strong> - {item.illness}: {item.cases} cases
              </li>
            ))}
          </ul>
        </div>
      )}

     
      <div style={styles.navGrid}>
        <Link to="/dashboard" style={styles.navItem}>
          <FaTachometerAlt size={50} color="#007BFF" />
          <span>Dashboard</span>
        </Link>
        <Link to="/messages" style={styles.navItem}>
          <FaEnvelope size={50} color="#28a745" />
          <span>Messages</span>
        </Link>
        <Link to="/alerts" style={styles.navItem}>
          <FaBell size={50} color="#dc3545" />
          <span>Alerts</span>
        </Link>
        <Link to="/settings" style={styles.navItem}>
          <FaCog size={50} color="#6c757d" />
          <span>Settings</span>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    maxWidth: "700px",
    margin: "auto",
    textAlign: "center",
  },
  searchForm: {
    marginBottom: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  searchInput: {
    padding: "10px",
    fontSize: "16px",
    width: "250px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  searchButton: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "white",
    cursor: "pointer",
  },
  results: {
    textAlign: "left",
    marginBottom: "30px",
  },
  navGrid: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "40px",
  },
  navItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textDecoration: "none",
    color: "#333",
    fontSize: "16px",
    cursor: "pointer",
    width: "120px",
  },
};

export default HomePage;
