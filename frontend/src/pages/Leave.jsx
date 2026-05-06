import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { API } from "../services/api";

export default function Leave() {
  const [reason, setReason] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const role = localStorage.getItem("role");

  const fetchLeaves = async () => {
    try {
      const res = await API.get("/leave");
      setData(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const applyLeave = async () => {
    if (!reason) return alert("Enter reason");

    await API.post("/leave", { reason });
    setReason("");
    fetchLeaves();
  };

  const updateStatus = async (id, status) => {
    await API.put(`/leave/${id}`, { status });
    fetchLeaves();
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-6">Leave Management</h2>

      {/* Apply Leave Card (Only Employee) */}
      {role !== "HR" && (
        <div className="bg-white p-5 rounded-xl shadow mb-6">
          <h3 className="text-lg font-medium mb-3">Apply Leave</h3>

          <div className="flex gap-3">
            <input
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Enter reason"
              className="border p-2 rounded w-full"
            />

            <button
              onClick={applyLeave}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Apply
            </button>
          </div>
        </div>
      )}

      {/* Leave List */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="text-lg font-medium mb-4">
          {role === "HR" ? "All Leave Requests" : "Your Leaves"}
        </h3>

        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : data.length === 0 ? (
          <p className="text-gray-500">No leave requests</p>
        ) : (
          data.map((l) => (
            <div
              key={l._id}
              className="flex justify-between items-center border-b py-3"
            >
              <div>
                <p className="font-medium">{l.reason}</p>

                {/* Show employee name for HR */}
                {role === "HR" && l.userId && (
                  <p className="text-sm text-gray-500">
                    {l.userId.name || "Employee"}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-3">
                {/* Status */}
                <span
                  className={`font-medium ${
                    l.status === "Approved"
                      ? "text-green-600"
                      : l.status === "Rejected"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {l.status}
                </span>

                {/* HR Controls */}
                {role === "HR" && l.status === "Pending" && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => updateStatus(l._id, "Approved")}
                      className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => updateStatus(l._id, "Rejected")}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      Reject
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </Layout>
  );
}