import React from "react";
import Layout from "../components/Layout";
import { useData } from "../context/DataContext";

const ProductDetails = () => {
  const { books } = useData();

  return (
    <Layout>
      <h2 className="text-4xl font-bold mb-8 tracking-tight text-center">Product Details</h2>

      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-3 font-semibold">Serial No</th>
              <th className="p-3 font-semibold">Name</th>
              <th className="p-3 font-semibold">Author / Director</th>
              <th className="p-3 font-semibold">Type</th>
              <th className="p-3 font-semibold">Status</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book, index) => (
              <tr
                key={book.id}
                className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} border-b hover:bg-gray-100 transition`}
              >
                <td className="p-3">{book.serialNo}</td>
                <td className="p-3 font-medium">{book.name}</td>
                <td className="p-3">{book.author}</td>
                <td className="p-3 capitalize">{book.type}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold shadow-md ${
                      book.available
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {book.available ? "Available" : "Issued"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default ProductDetails;
