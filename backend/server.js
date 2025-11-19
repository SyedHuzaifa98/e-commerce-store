import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json()); // allow use to parse data from body
app.use("/api/auth", authRoutes)
app.listen(PORT, () => {
    console.log("Server is running on port: 5000");
    connectDB();
});