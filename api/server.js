const express = require("express");
require("dotenv/config.js");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("CareerMatch");
});

const port = process.env.PORT || 9999;
app.listen(port, async () => {
  console.log(`Server running on: http://localhost:${port}`);
});
