// TransactionForm.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css'; // Import DatePicker CSS
import '../style.css'; // Import custom styles

const TransactionForm = ({ onAddTransaction }) => {
  const [date, setDate] = useState(null);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      date,
      description,
      amount
    };
    onAddTransaction(newTransaction);
    setDate(null);
    setDescription('');
    setAmount('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="transaction-form">
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit} className="form-group horizontal">
        <div className="form-group">
          <label>Date:</label>
          <DatePicker
            selected={date}
            onChange={date => setDate(date)}
            dateFormat="MM/dd/yyyy"
            className="form-control"
            popperClassName="datepicker-popper"
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-control"
            onKeyDown={handleKeyDown}
          />
        </div>
        <button type="submit" className="btn btn-primary search-btn">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
