import { useEffect, useState } from "react";
import API from "../api/api";
import { toast } from "react-toastify";

export default function TicketList() {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [updateError, setUpdateError] = useState(null);
  const [search, setSearch] = useState("");

  const fetchTickets = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await API.get("/tickets");
      setTickets(res.data);
      console.log(res.data);
    } catch (err) {
      console.error("Error creating ticket", err);
      setError(err.response?.data?.message || "Something went wrong ");
      toast.error(err.response?.data?.message || "Something went wrong ");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      setUpdateError(null);
      await API.post(`/tickets/${id}`, { status });
      toast.success("status updated");
      fetchTickets();
    } catch (err) {
      console.log(err);
      setUpdateError(err.response?.data?.message || "error in updating status");
      toast.error(err.response?.data?.message || "error in updating status");
    }
  };

  const getPriorityColor = (priority) => {
    if (priority === "Low") {
      return "bg-green-100 text-green-700";
    } else if (priority === "Medium") {
      return "bg-yellow-100 text-yellow-700";
    } else if (priority === "High") {
      return "bg-red-100 text-red-700";
    } else {
      return "bg-gray-100 text-gray-700";
    }
  };
  const getStatusColor = (status) => {
    if (status === "NEW") {
      return "bg-blue-100 text-blue-700";
    } else if (status === "INVESTIGATING") {
      return "bg-yellow-100 text-yellow-700";
    } else if (status === "RESOLVED") {
      return "bg-green-100 text-green-700";
    } else {
      return "bg-gray-100 text-gray-700";
    }
  };
  const filteredTickets = tickets?.filter((t) => {
    const value = search.toLowerCase();

    return (
      t.subject.toLowerCase().includes(value) ||
      t.status.toLowerCase().includes(value) ||
      t.priority.toLowerCase().includes(value)
    );
  });
  return (
    <div className="bg-white shadow-xl rounded-2xl p-4 -mt-5 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-900">
        All Tickets
      </h2>
      <input
        type="text"
        placeholder="Search by subject priority status.."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full sm:w-1/3 border p-2 rounded-lg mb-7"
      />
      {loading && (
        <p className="text-center text-gray-500 py-6">Loading tickets...</p>
      )}

      {error && <p className="text-center text-red-500 py-6">{error}</p>}
      {updateError && (
        <p className="text-center text-red-500 py-2">{updateError}</p>
      )}
      {!loading && !error && tickets.length === 0 ? (
        <p className="text-gray-700 text-center py-6 text-xl">
          No tickets found
        </p>
      ) : (
        <>
          {filteredTickets.length === 0 && (
            <p className="text-center text-gray-500 py-4">
              No matching tickets
            </p>
          )}

          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-600 text-left text-lg">
                  <th className="p-3">Subject</th>
                  <th className="p-3">Priority</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Date</th>
                  <th className="p-3 pl-35">Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredTickets.map((t) => (
                  <tr
                    key={t._id}
                    className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="p-3 font-medium">{t.subject}</td>

                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${getPriorityColor(t.priority)}`}
                      >
                        {t.priority}
                      </span>
                    </td>

                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${getStatusColor(t.status)}`}
                      >
                        {t.status}
                      </span>
                    </td>

                    <td className="p-3 text-gray-600 text-sm">
                      {new Date(t.createdAt).toLocaleString()}
                    </td>

                    <td className="p-3 text-center">
                      <select
                        onChange={(e) => updateStatus(t._id, e.target.value)}
                        value={t.status}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition duration-200 cursor-pointer"
                      >
                        <option>NEW</option>
                        <option>INVESTIGATING</option>
                        <option>RESOLVED</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden space-y-4">
            {filteredTickets.map((t) => (
              <div key={t._id} className="border rounded-xl p-4 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">
                  {t.subject}
                </h3>

                <div className="flex justify-between text-sm mb-2">
                  <span
                    className={`px-2 py-1 rounded ${getPriorityColor(t.priority)}`}
                  >
                    {t.priority}
                  </span>

                  <span
                    className={`px-2 py-1 rounded ${getStatusColor(t.status)}`}
                  >
                    {t.status}
                  </span>
                </div>

                <p className="text-xs text-gray-500 mb-3">
                  {new Date(t.createdAt).toLocaleString()}
                </p>

                <select
                  onChange={(e) => updateStatus(t._id, e.target.value)}
                  value={t.status}
                  className="w-full border rounded-lg p-2 text-sm"
                >
                  <option>NEW</option>
                  <option>INVESTIGATING</option>
                  <option>RESOLVED</option>
                </select>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
