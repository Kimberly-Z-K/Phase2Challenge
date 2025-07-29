// server/routes/auth.js
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../db");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const { rows } = await db.query(
      "INSERT INTO users (email, password_hash, name) VALUES ($1, $2, $3) RETURNING id, email, name",
      [email, hashedPassword, name],
    );
    const token = jwt.sign({ userId: rows[0].id }, process.env.JWT_SECRET);
    res.status(201).json({ token, user: rows[0] });
  } catch (err) {
    res.status(400).json({ error: "Email already exists" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const { rows } = await db.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  if (!rows.length)
    return res.status(401).json({ error: "Invalid credentials" });

  const isValid = await bcrypt.compare(password, rows[0].password_hash);
  if (!isValid) return res.status(401).json({ error: "Invalid credentials" });

  const token = jwt.sign({ userId: rows[0].id }, process.env.JWT_SECRET);
  res.json({
    token,
    user: { id: rows[0].id, email: rows[0].email, name: rows[0].name },
  });
});

module.exports = router;
