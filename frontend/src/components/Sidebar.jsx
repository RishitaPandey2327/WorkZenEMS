export default function Sidebar() {
  const logout = () => {
  if(confirm("Are you sure you want to logout?")){
    localStorage.clear();
    window.location = "/";
  }
};

  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5 fixed flex flex-col justify-between">

      <div>
        <h1 className="text-2xl font-bold mb-8">WorkZen</h1>

        <div className="flex flex-col gap-4 text-sm">
          <a href="/dashboard">Dashboard</a>
          <a href="/leave">Leave</a>
          <a href="/attendance">Attendance</a>
          <a href="/notices">Notices</a>
        </div>
      </div>

      <button
        onClick={logout}
        className="bg-red-500 p-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}