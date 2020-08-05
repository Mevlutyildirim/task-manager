import express from 'express';
import Cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import "reflect-metadata";

dotenv.config();

const App = express();

App.use(Cors());
App.use(morgan("dev"));
App.use(express.json());
App.listen(5000, ()=> console.log(`server is up and running ${process.env.NODE_ENV}`));