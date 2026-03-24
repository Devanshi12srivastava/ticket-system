import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import connectDB from "./config/mongodb.js"
import cors from "cors";
import ticketRoutes from "./routes/ticketRoutes.js";

const app = express();
const PORT=process.env.PORT || 8000

connectDB()
app.use(express.json());
app.use(cors());

app.use("/api/tickets", ticketRoutes);

app.get("/", (req, res) => {
  res.send("working fully sucess fine good");
});
app.listen(PORT, () => console.log("Server running on port 8000"));
