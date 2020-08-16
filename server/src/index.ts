import express from "express";
import "reflect-metadata";
import Cors from "cors";
import dotenv from "dotenv";
import connectDatabase  from "./database/createConnection";

dotenv.config();

const boostDatabase = async (): Promise<void> => {
  try {
    await connectDatabase();
  } catch (err) {
    console.log(err);
  }
};

const boostExpress = (): void => {
  const App = express();
  App.use(Cors());
  App.use(express.json());
  App.listen(5000, () =>
    console.log(`server is up and running ${process.env.NODE_ENV}`)
  );
};

const boostServer = async (): Promise<void> => {
  await boostDatabase();
  boostExpress();
};

boostServer();
