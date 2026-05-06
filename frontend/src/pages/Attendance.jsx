import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { API } from "../services/api";

export default function Attendance() {
  const [data, setData] = useState([]);

  const fetchAttendance = async () => {
    const res = await API.get("/attendance");
    setData(res.data);
  };

  const markAttendance = async () => {
    await API.post("/attendance");
    fetchAttendance();
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-6">Attendance</h2>

      {/* Button */}
      <div className="mb-6">
        <button
          onClick={markAttendance}
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          Mark Today’s Attendance
        </button>
      </div>

      {/* Attendance List */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="text-lg font-medium mb-4">Your Records</h3>

        {data.length === 0 ? (
          <p className="text-gray-500">No records</p>
        ) : (
          data.map((a) => (
            <div key={a._id} className="border-b py-2">
              {new Date(a.date).toLocaleDateString()}
            </div>
          ))
        )}
      </div>
    </Layout>
  );
}