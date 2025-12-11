import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Layout = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top Navbar */}
      <nav className="bg-red-700 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">Library Management System</h1>

          {user && (
            <div className="flex items-center gap-4">
              <span className="font-medium text-sm bg-blue-800 px-3 py-1 rounded-full">
                {user.username} ({user.role})
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-semibold shadow-md transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Secondary Navigation */}
      {user && (
        <div className="bg-pink-600 text-white shadow-inner">
          <div className="container mx-auto px-4 py-3 flex gap-6 text-sm font-semibold">
            <Link
              to={user.role === "admin" ? "/maintenance" : "/reports"}
              className="hover:text-yellow-300 transition"
            >
              Home
            </Link>

            {user.role === "admin" && (
              <>
                <Link to="/maintenance" className="hover:text-yellow-300 transition">
                  Maintenance
                </Link>
                <Link to="/product-details" className="hover:text-yellow-300 transition">
                  Product Details
                </Link>
                <Link to="/reports" className="hover:text-yellow-300 transition">
                  Reports
                </Link>
                <Link to="/transactions" className="hover:text-yellow-300 transition">
                  Transactions
                </Link>
              </>
            )}

            {user.role === "user" && (
              <>
                <Link to="/reports" className="hover:text-yellow-300 transition">
                  Reports
                </Link>
                <Link to="/transactions" className="hover:text-yellow-300 transition">
                  Transactions
                </Link>
                <Link to="/product-details" className="hover:text-yellow-300 transition">
                  Product Details
                </Link>
              </>
            )}
          </div>
        </div>
      )}

      {/* Page Content */}
      <main className="container mx-auto px-4 py-6 flex-1">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-4 text-center text-sm mt-6">
        © {new Date().getFullYear()} Library Management System — All Rights Reserved
      </footer>
    </div>
  );
};

export default Layout;