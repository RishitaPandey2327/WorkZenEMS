import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { API } from "../services/api";

export default function Dashboard() {
  const [leaves, setLeaves] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [notices, setNotices] = useState([]);
  

  const fetchData = async () => {
    
    const l = await API.get("/leave");
    const a = await API.get("/attendance");
    const n = await API.get("/notice");

    setLeaves(l.data);
    setAttendance(a.data);
    setNotices(n.data);
  }

  useEffect(() => {
    fetchData();
  }, []);
 
  

  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-6"> Welcome to WorkZen EMS 👋</h2>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-gray-500">Total Leaves</h3>
          <p className="text-3xl font-bold">{leaves.length}</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-gray-500">Attendance Records</h3>
          <p className="text-3xl font-bold">{attendance.length}</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-gray-500">Notices</h3>
          <p className="text-3xl font-bold">{notices.length}</p>
        </div>

      </div>
      <div className="mt-8 bg-white p-5 rounded-xl shadow">
      <h3 className="text-lg font-medium mb-3">Recent Notices</h3>

      {notices.length === 0 ? (
        <p className="text-gray-500">No notices</p>
      ) : (
        notices.slice(0, 3).map((n) => (
          <div key={n._id} className="border-b py-2">
            {n.message}
          </div>
        ))
      )}
    </div>
    </Layout>
  );
}