export default function Navbar(){
  return (
    <div className="p-4 bg-gray-200 flex gap-4">
      <a href="/dashboard">Dashboard</a>
      <a href="/leave">Leave</a>
      <a href="/attendance">Attendance</a>
      <a href="/notices">Notices</a>
    </div>
  );
}