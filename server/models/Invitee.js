const db = require("./db");

const Invitee = {
  getAll: function (callback) {
    db.query("SELECT * FROM invitees", callback);
  },
};

module.exports = Invitee;
