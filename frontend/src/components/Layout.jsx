import Sidebar from "./Sidebar";

export default function Layout({children}){
  return (
    <div className="flex">
      <Sidebar/>
      <div className="ml-64 w-full bg-gray-100 min-h-screen p-6">
        {children}
      </div>
    </div>
  );
}