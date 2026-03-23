import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ticketRoutes from "./routes/ticketRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/ticketts-system").then(() => console.log("DB Connected")).catch((err) => console.log(err));

app.use("/api/tickets", ticketRoutes);

app.get("/", (req, res) => {
  res.send("working fully sucess fine good");
});
app.listen(8000, () => console.log("Server running on port 8000"));
