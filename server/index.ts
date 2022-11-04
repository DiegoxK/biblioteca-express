import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import dbConnection from "./config/db-connection";
import router from "./routes";

//dotenv
dotenv.config();

//Express Server
const app = express();

//Mongo Connection
dbConnection(app);

//Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

//Routes
app.use("/api", router);
