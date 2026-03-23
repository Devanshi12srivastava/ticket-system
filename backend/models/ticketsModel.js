import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    subject: String,
    message: String,
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Low",
    },
    status: {
      type: String,
      enum: ["NEW", "INVESTIGATING", "RESOLVED"],
      default: "NEW",
    },
  },
  { timestamps: true },
);

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
