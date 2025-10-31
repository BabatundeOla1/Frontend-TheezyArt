import React from "react";

const AdminDashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Welcome, Admin 👋</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;
