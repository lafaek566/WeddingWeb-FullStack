const express = require("express");
const cors = require("cors");
const app = express();

// CORS Configuration
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"], // Ensure DELETE is included
    credentials: true,
  })
);

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use("/api/invitees", require("./routes/invitees")); // Existing invitees route
app.use("/api/prayer-wishes", require("./routes/prayerWishesRoutes")); // New prayer wishes route

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
