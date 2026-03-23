import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function TicketForm() {
  const [form, setForm] = useState({
    subject: "",
    message: "",
    priority: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(null);
      await API.post("/tickets", form);
      setForm({ subject: "", message: "", priority: "Low" });
      toast.success("tickets created");
      navigate("/ticket-list");
    } catch (error) {
      console.error("Error creating ticket", error);
      const message = error.response?.data?.message || "Something went wrong ";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-2xl p-5 mt-8 sm:p-6 md:p-8 w-full max-w-lg md:max-w-xl lg:max-w-2xl mx-auto ">
    
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-5 text-blue-900 text-center">
        Create Ticket
      </h2>
      {error && (
        <div className="mb-4 text-red-600 text-sm text-center bg-red-50 py-2 px-3 rounded-lg">
          {error}
        </div>
      )}
      
      <div className="mb-4">
        <label className="block text-[16px] font-medium text-gray-600 mb-1">
          Subject
        </label>
        <input
          type="text"
          placeholder="Enter subject"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition" required/>
         
        
      </div>

      <div className="mb-4">
        <label className="block text-[16px] font-medium text-gray-600 mb-1">
          Message
        </label>
        <textarea
          placeholder="Enter your message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border border-gray-300 rounded-lg p-3 h-28 sm:h-32 text-sm sm:text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-[16px] font-medium text-gray-600 mb-1">
          Priority
        </label>
        <select
          value={form.priority}
          onChange={(e) => setForm({ ...form, priority: e.target.value })}
          className="w-full border border-gray-300 rounded-lg p-3 text-[16px] sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
        
          <option value="" disabled hidden>
            Select Priority
          </option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-900 text-white py-3 rounded-lg cursor-pointer hover:bg-blue-800 active:scale-95 transition duration-200 font-medium text-[16px] disabled:opacity-60 disabled:cursor-not-allowed">
      
        {loading ? "Creating..." : "Create Ticket"}
      </button>
    </form>
  );
}
