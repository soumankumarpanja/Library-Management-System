import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Transactions = () => {
  const cardStyle =
    "p-8 rounded-2xl shadow-md bg-white border border-gray-200 text-center hover:shadow-xl transition transform hover:-translate-y-1";

  const iconStyle = "text-5xl mb-3";

  const items = [
    {
      icon: "📚",
      title: "Is Book Available?",
      desc: "Search for available books",
      link: "/book-available",
      color: "bg-green-500 hover:bg-green-600 text-white",
    },
    {
      icon: "📖",
      title: "Issue Book",
      desc: "Issue a book to member",
      link: "/book-issue",
      color: "bg-blue-500 hover:bg-blue-600 text-white",
    },
    {
      icon: "↩️",
      title: "Return Book",
      desc: "Return issued book",
      link: "/return-book",
      color: "bg-orange-500 hover:bg-orange-600 text-white",
    },
    {
      icon: "💰",
      title: "Pay Fine",
      desc: "Pay pending fines",
      link: "/pay-fine",
      color: "bg-red-500 hover:bg-red-600 text-white",
    },
  ];

  return (
    <Layout>
      <h2 className="text-4xl font-bold mb-10 text-center tracking-tight">
        Transactions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <Link key={index} to={item.link}>
            <div className={cardStyle}>
              <div className={`${iconStyle}`}>{item.icon}</div>
              <div
                className={`${item.color} inline-block px-4 py-2 rounded-lg font-semibold text-lg mb-3 shadow-md transition`}
              >
                {item.title}
              </div>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Transactions;
