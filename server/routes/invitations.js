const express = require("express");
const router = express.Router();

let invitees = [];

// GET /api/invitees
router.get("/", (req, res) => {
  res.json(invitees);
});

// POST /api/invitees
router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    const newInvitee = { id: invitees.length + 1, name };
    invitees.push(newInvitee);
    res.status(201).json(newInvitee);
  } else {
    res.status(400).json({ message: "Name is required" });
  }
});

module.exports = router;
