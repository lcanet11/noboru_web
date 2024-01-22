import React, { useState } from 'react';
import './BuyStocks.css';
import { db } from './firebase';

function BuyStocks() {
  const collectionRef = db.collection('myStocks');

  const buyStock = async (ticker) => {
    try {
      // Add the ticker to the 'myStocks' collection
      await collectionRef.add({ ticker });
      console.log('Ticker added successfully!');
      // You can also reset the ticker input field after adding the ticker
      setTicker('');
    } catch (error) {
      console.error('Error adding ticker:', error);
    }
  };

  const handleChange = (event) => {
    setTicker(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    buyStock(ticker);
  };

  const [ticker, setTicker] = useState('');

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
        <br />
        <button className="buystocks_button" type="submit">
          Buy
        </button>
      </form>
    </main>
  );
}

export default BuyStocks;
