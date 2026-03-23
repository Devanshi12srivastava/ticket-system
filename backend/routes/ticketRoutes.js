import express from "express";
import {
  createTicket,
  getTickets,
  updateTicket,
} from "../controllers/ticketsController.js";

const router = express.Router();

router.post("/", createTicket);
router.get("/", getTickets);
router.post("/:id", updateTicket);

export default router;
