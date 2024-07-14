require("dotenv").config();
const express = require("express");
const { createServer } = require('node:http');
const cors = require("cors");
var cookieParser = require('cookie-parser')
const morgan = require("morgan");
const configViewEngine = require("./config/viewEngine");
const app = express();
const server = createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
//config template 
configViewEngine(app);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("CareerMatch");
});



// api
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/company', require('./routes/company.routes'));

app.use((error, req, res, next) => {
  res.status(500).json({ error: error.message });
});


io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});


const port = process.env.PORT || 9999;
server.listen(port, async () => {
  console.log(`Server running on: http://localhost:${port}`);
});

