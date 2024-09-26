const cors = require("cors");

module.exports = cors({
  origin: "http://localhost:3000",
  methods: "GET,POST",
  optionsSuccessStatus: 200,
});
