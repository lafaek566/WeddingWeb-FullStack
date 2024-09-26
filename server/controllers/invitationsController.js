let invitees = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

// Get all invitees
exports.getInvitees = (req, res) => {
  res.json(invitees);
};

// Add an invitee
exports.addInvitee = (req, res) => {
  const { name } = req.body;
  const newInvitee = {
    id: invitees.length + 1,
    name,
  };
  invitees.push(newInvitee);
  res.status(201).json(newInvitee);
};

// Update an invitee
exports.updateInvitee = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const invitee = invitees.find((i) => i.id === parseInt(id));
  if (!invitee) return res.status(404).send("Invitee not found");

  invitee.name = name;
  res.json(invitee);
};

// Delete an invitee
exports.deleteInvitee = (req, res) => {
  const { id } = req.params;
  const index = invitees.findIndex((i) => i.id === parseInt(id));

  if (index === -1) return res.status(404).send("Invitee not found");

  invitees.splice(index, 1);
  res.status(204).send(); // No content to send back
};
