const db = require("../models/db"); // Import koneksi database

// GET invitees
const getInvitees = (req, res) => {
  db.query("SELECT * FROM invitees", (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Failed to fetch invitees" });
    }
    res.json(results);
  });
};

// POST invitee
const addInvitee = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  db.query("INSERT INTO invitees (name) VALUES (?)", [name], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Failed to add invitee" });
    }
    res.status(201).json({ id: result.insertId, name });
  });
};

// PUT update invitee
const updateInvitee = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  db.query(
    "UPDATE invitees SET name = ? WHERE id = ?",
    [name, id],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Failed to update invitee" });
      }
      res.json({ id, name });
    }
  );
};

// DELETE invitee
const deleteInvitee = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM invitees WHERE id = ?", [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Failed to delete invitee" });
    }
    res.status(204).send(); // No content
  });
};

module.exports = {
  getInvitees,
  addInvitee,
  updateInvitee,
  deleteInvitee,
};
