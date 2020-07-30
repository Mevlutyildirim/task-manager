const express = require("express");
const App = express();
const Cors = require("cors");
const Logger = require("morgan");

App.use(Cors());
App.use(Logger());
App.use(express.json());
App.use("/api", require('../routes'));
require('../config/connection');
App.listen(5000, ()=> console.log("server is up and runing"));

