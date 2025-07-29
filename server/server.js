const express = require("express");
const authRoutes = require("./server/routes/auth");
require("dotenv").config();

const app = express();
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Protected route example
app.get("/api/protected", require("./server/middleware/auth"), (req, res) => {
  res.json({ message: "This is a protected route", userId: req.userId });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
