const express = require("express");
const router = express.Router();
const {
  getInvitees,
  addInvitee,
  updateInvitee,
  deleteInvitee,
} = require("../controllers/inviteesController");

// GET invitees
router.get("/", getInvitees);

// POST invitee
router.post("/", addInvitee);

// PUT update invitee
router.put("/:id", updateInvitee);

// DELETE invitee
router.delete("/:id", deleteInvitee);

module.exports = router;
