import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { API } from "../services/api";

export default function Notices() {
  const [data, setData] = useState([]);
  const [msg, setMsg] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(true);

  const role = localStorage.getItem("role");

  const fetchNotices = async () => {
    try {
      const res = await API.get("/notice");
      setData(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const createNotice = async () => {
    if (!msg || !endDate) return alert("Fill all fields");

    await API.post("/notice", {
      message: msg,
      endDate
    });

    setMsg("");
    setEndDate("");
    fetchNotices();
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-6">Notices</h2>

      {/* HR Notice Creator */}
      {role === "HR" && (
        <div className="bg-white p-5 rounded-xl shadow mb-6">
          <h3 className="text-lg font-medium mb-3">Create Notice</h3>

          <div className="flex gap-3">
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Enter notice"
              className="border p-2 rounded w-full"
            />

            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border p-2 rounded"
            />

            <button
              onClick={createNotice}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Post
            </button>
          </div>
        </div>
      )}

      {/* Notices List */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="text-lg font-medium mb-4">All Notices</h3>

        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : data.length === 0 ? (
          <p className="text-gray-500">No notices</p>
        ) : (
          data.map((n) => {
            const daysLeft = Math.ceil(
              (new Date(n.endDate) - new Date()) /
                (1000 * 60 * 60 * 24)
            );

            return (
              <div key={n._id} className="border-b py-3">
                <p className="font-medium">{n.message}</p>

                <p className="text-sm text-gray-500">
                  Valid till:{" "}
                  {new Date(n.endDate).toLocaleDateString()}
                </p>

                <p
                  className={`text-xs ${
                    daysLeft <= 2
                      ? "text-red-500"
                      : "text-blue-500"
                  }`}
                >
                  {daysLeft > 0
                    ? `${daysLeft} days left`
                    : "Expired"}
                </p>
              </div>
            );
          })
        )}
      </div>
    </Layout>
  );
}