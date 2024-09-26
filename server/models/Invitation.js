const db = require("./db");

const Invitation = {
  getAll: function (callback) {
    db.query("SELECT * FROM invitations", callback);
  },
};

module.exports = Invitation;
