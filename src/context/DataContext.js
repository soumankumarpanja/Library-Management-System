import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
const [books, setBooks] = useState([
  { 
    id: 1, 
    name: 'To Kill a Mockingbird', 
    author: 'Harper Lee', 
    type: 'book', 
    serialNo: 'B001', 
    available: true, 
    category: 'Classic Fiction', 
    cost: '14.99', 
    procurementDate: '2024-02-10' 
  },
  { 
    id: 2, 
    name: 'The Matrix (DVD)', 
    author: 'The Wachowskis', 
    type: 'movie', 
    serialNo: 'M001', 
    available: true, 
    category: 'Sci-Fi', 
    cost: '18.50', 
    procurementDate: '2024-02-12' 
  },
  { 
    id: 3, 
    name: 'The Alchemist', 
    author: 'Paulo Coelho', 
    type: 'book', 
    serialNo: 'B002', 
    available: false, 
    category: 'Philosophical Fiction', 
    cost: '11.99', 
    procurementDate: '2024-02-15' 
  },
  { 
    id: 4, 
    name: 'The Power of Habit', 
    author: 'Charles Duhigg', 
    type: 'book', 
    serialNo: 'B003', 
    available: true, 
    category: 'Self-Help', 
    cost: '16.75', 
    procurementDate: '2024-03-01' 
  },
  { 
    id: 5, 
    name: 'Avatar (Blu-ray)', 
    author: 'James Cameron', 
    type: 'movie', 
    serialNo: 'M002', 
    available: true, 
    category: 'Fantasy/Sci-Fi', 
    cost: '20.00', 
    procurementDate: '2024-03-05' 
  }
]);

  
  const [members, setMembers] = useState([
    { id: 1, memberNo: 'M001', name: 'John Doe', email: 'john@example.com', phone: '1234567890', startDate: '2024-01-01', endDate: '2024-07-01', status: 'active' }
  ]);
  
  const [issuedBooks, setIssuedBooks] = useState([
    { id: 1, bookName: 'The Great Gatsby', author: 'F. Scott Fitzgerald', issueDate: '2024-01-15', returnDate: '2024-01-30', remarks: '' }
  ]);

  const addBook = (book) => setBooks([...books, { ...book, id: books.length + 1 }]);
  const updateBook = (id, updatedBook) => setBooks(books.map(b => b.id === id ? { ...b, ...updatedBook } : b));
  const addMember = (member) => setMembers([...members, { ...member, id: members.length + 1 }]);
  const updateMember = (id, updatedMember) => setMembers(members.map(m => m.id === id ? { ...m, ...updatedMember } : m));
  const issueBook = (issue) => {
    setIssuedBooks([...issuedBooks, { ...issue, id: issuedBooks.length + 1 }]);
    setBooks(books.map(b => b.name === issue.bookName ? { ...b, available: false } : b));
  };
  const returnBook = (id) => setIssuedBooks(issuedBooks.filter(b => b.id !== id));

  return (
    <DataContext.Provider value={{ books, members, issuedBooks, addBook, updateBook, addMember, updateMember, issueBook, returnBook }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
