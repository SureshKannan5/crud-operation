import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./connectDB.mjs";
import employeeRoutes from "./employeeRoutes.mjs";

const PORT = 8032;

const BaseUrl = "/api/v1";
const app = express();

dotenv.config();

connectDB();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(`${BaseUrl}/employee`, employeeRoutes);

app.listen(PORT, () => console.log("server running on 8080"));
