import React, { useState } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import Search from './components/Search';
import './style.css'; // Import custom styles

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  // Filter transactions based on the search term matching the description
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort transactions alphabetically by description
  const sortedTransactions = filteredTransactions.slice().sort((a, b) => {
    const descA = a.description.toLowerCase();
    const descB = b.description.toLowerCase();
    return descA.localeCompare(descB);
  });

  return (
    <div className="app">
      <h1>Bank Transactions App</h1>
      <TransactionForm onAddTransaction={addTransaction} />
      <div className="search-bar">
        <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </div>
      {/* Pass the sorted transactions to the TransactionTable component */}
      <TransactionTable transactions={sortedTransactions} />
    </div>
  );
};

export default App;
