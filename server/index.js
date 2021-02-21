import express from "express";
import cors from "cors";
import color from "Colors";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js";
import postRoutes from "./Routes/post.js";
connectDB();
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server Running  on Port${PORT}`.green.inverse);
});
