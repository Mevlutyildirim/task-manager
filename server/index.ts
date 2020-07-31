import express from 'express';
import Cors from 'cors';
import morgan from 'morgan';

const App = express();

App.use(Cors());
App.use(morgan("dev"));
App.use(express.json());
App.use("/api", require('../routes'));
require('../config/connection');
App.listen(5000, ()=> console.log("server is up and runing"));