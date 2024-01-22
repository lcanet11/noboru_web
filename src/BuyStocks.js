import React, { useState, useEffect } from 'react';
import './BuyStocks.css';
import { db } from './firebase';

function BuyStocks() {
  const collectionRef = db.collection('myStocks');

  const buyStock = async (ticker, shares) => {
    try {
      // Add the ticker and shares to the 'myStocks' collection
      await collectionRef.add({ ticker, shares });
      console.log('Stock added successfully!');
      // Reset the input fields after adding the stock
      setTicker('');
      setShares('');
    } catch (error) {
      console.error('Error adding stock:', error);
    }
  };

  const handleChange = (event) => {
    const { id, value } = event.target;

    // Update the state based on the input field id
    if (id === 'ticker') {
      setTicker(value);
    } else if (id === 'shares') {
      setShares(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Set a flag to indicate that the form has been submitted
    setFormSubmitted(true);
  };

  const [ticker, setTicker] = useState('');
  const [shares, setShares] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // Use useEffect to handle the asynchronous operation after form submission
    if (formSubmitted && ticker !== '' && shares !== '') {
      // Pass state-setting functions to buyStock
      buyStock(ticker, shares);
      // Reset the form submission flag
      setFormSubmitted(false);
    }
  }, [formSubmitted, ticker, shares]);

  return (
    <main className="buystocks_container">
      <form className="buystocks_buttons_container" onSubmit={handleSubmit}>
        <input
          className="buystocks_search_bar"
          value={ticker}
          type="text"
          id="ticker"
          onChange={handleChange}
          placeholder="Enter Ticker Symbol"
        />

        <input
          className="buystocks_shares_bar"
          value={shares}
          type="text"
          id="shares"
          onChange={handleChange}
          placeholder="Enter # of Shares"
        />

        <br />
        <button className="buystocks_button" type="submit">
          Buy
        </button>
      </form>
    </main>
  );
}

export default BuyStocks;
