import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useAuth } from "../context/AuthContext";

const Reports = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const cardStyle =
    "p-6 rounded-2xl shadow-lg bg-white border border-gray-200 hover:shadow-xl transition transform hover:-translate-y-1";

  const iconContainer =
    "w-14 h-14 flex items-center justify-center rounded-xl text-3xl mr-4";

  const reportItems = [
    {
      title: "Master List of Books",
      desc: "View all books in library",
      icon: "📚",
      link: "/master-books",
      color: "bg-blue-500 text-white",
    },
    {
      title: "Master List of Movies",
      desc: "View all movies in library",
      icon: "🎬",
      link: "/master-movies",
      color: "bg-purple-500 text-white",
    },
    {
      title: "Master List of Memberships",
      desc: "View all members",
      icon: "👥",
      link: "/master-memberships",
      color: "bg-green-500 text-white",
    },
    {
      title: "Active Issues",
      desc: "Currently issued books",
      icon: "📖",
      link: "/active-issues",
      color: "bg-orange-500 text-white",
    },
    {
      title: "Overdue Returns",
      desc: "Books past return date",
      icon: "⚠️",
      link: "/overdue-returns",
      color: "bg-red-500 text-white",
    },
    {
      title: "Pending Issue Requests",
      desc: "Requests awaiting approval",
      icon: "📝",
      link: "/pending-requests",
      color: "bg-yellow-500 text-white",
    },
  ];

  return (
    <Layout>
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold tracking-tight">Reports Dashboard</h2>
        <Link to={user?.role === "admin" ? "/maintenance" : "/reports"}>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-semibold text-lg shadow-md">
            Home
          </button>
        </Link>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {reportItems.map((item, index) => (
          <Link key={index} to={item.link}>
            <div className={cardStyle}>
              <div className="flex items-center">
                <div className={`${iconContainer} ${item.color}`}>{item.icon}</div>
                <div>
                  <div className="text-xl font-bold">{item.title}</div>
                  <div className="text-sm text-gray-600 mt-1">{item.desc}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-end mt-10">
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 font-semibold text-lg shadow-lg"
        >
          Log Out
        </button>
      </div>
    </Layout>
  );
};

export default Reports;