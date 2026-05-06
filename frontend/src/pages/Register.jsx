import { useState } from "react";
import { API } from "../services/api";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "EMP",
  });

  const handleSubmit = async () => {
    try {
      await API.post("/auth/register", form);
      alert("Registered successfully!");
      window.location = "/";
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-600">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-80">
        <h1 className="text-2xl font-bold text-center mb-6">
          WorkZen EMS
        </h1>

        <input
          className="w-full border p-2 mb-3 rounded"
          placeholder="Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          className="w-full border p-2 mb-3 rounded"
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          className="w-full border p-2 mb-3 rounded"
          placeholder="Password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <select
          className="w-full border p-2 mb-4 rounded"
          onChange={(e) =>
            setForm({ ...form, role: e.target.value })
          }
        >
          <option value="EMP">Employee</option>
          <option value="HR">HR</option>
        </select>

        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Register
        </button>

        <p className="text-sm text-center mt-4">
          Already have account?{" "}
          <a href="/" className="text-blue-600">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}