const db = require("../models/db"); // Adjust path as needed

// Function to add a prayer wish including address
const addPrayerWish = async (wish) => {
  const query =
    "INSERT INTO prayers_wishes (name, email, phone, address, message) VALUES (?, ?, ?, ?, ?)";
  const values = [
    wish.name,
    wish.email,
    wish.phone,
    wish.address,
    wish.message,
  ];

  return new Promise((resolve, reject) => {
    db.query(query, values, (err, results) => {
      if (err) {
        console.error("Insert error:", err); // Log the error
        return reject(err);
      }
      resolve(results);
    });
  });
};

// Function to fetch all prayer wishes
const getAllPrayerWishes = async () => {
  const query = "SELECT * FROM prayers_wishes";
  return new Promise((resolve, reject) => {
    db.query(query, (err, results) => {
      if (err) {
        console.error("Fetch error:", err); // Log the error
        return reject(err);
      }
      resolve(results);
    });
  });
};

// Function to update a prayer wish
const updatePrayerWish = async (id, wish) => {
  const query =
    "UPDATE prayers_wishes SET name = ?, email = ?, phone = ?, address = ?, message = ? WHERE id = ?";
  const values = [
    wish.name,
    wish.email,
    wish.phone,
    wish.address,
    wish.message,
    id,
  ];

  return new Promise((resolve, reject) => {
    db.query(query, values, (err, results) => {
      if (err) {
        console.error("Update error:", err); // Log the error
        return reject(err);
      }
      if (results.affectedRows === 0) {
        return reject(new Error("No rows were updated"));
      }
      resolve(results);
    });
  });
};

// Function to get a prayer wish by ID
const getPrayerWishById = async (id) => {
  const query = "SELECT * FROM prayers_wishes WHERE id = ?";
  return new Promise((resolve, reject) => {
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error("Fetch by ID error:", err); // Log the error
        return reject(err);
      }
      if (results.length === 0) {
        return reject(new Error("Prayer wish not found"));
      }
      resolve(results[0]);
    });
  });
};

// Inside your PrayerWishes.js model
const deletePrayerWish = async (id) => {
  const query = "DELETE FROM prayers_wishes WHERE id = ?";

  return new Promise((resolve, reject) => {
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error("Delete error:", err); // Log the error
        return reject(err); // Reject the promise with the error
      }
      resolve(results); // Resolve the promise with the results
    });
  });
};

module.exports = {
  addPrayerWish,
  getAllPrayerWishes,
  updatePrayerWish,
  getPrayerWishById,
  deletePrayerWish, // Ensure this is exported
};
