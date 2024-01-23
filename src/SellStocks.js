import React, { useState, useEffect } from 'react';
import './SellStocks.css';
import { db } from './firebase';

function SellStocks() {
  const collectionRef = db.collection('myStocks');

  const sellStock = async (ticker, shares) => {
    try {
      // Check if the stock with the given ticker already exists
      const existingStock = await collectionRef.where('ticker', '==', ticker).get();
  
      if (existingStock.empty) {
        console.log('Stock does not exist in the database.');
        // Handle the case where the stock does not exist (e.g., show an error message)
      } else {
        // If the stock exists, update the shares for that stock
        const existingDoc = existingStock.docs[0]; // Assuming there's only one matching document
  
        if (existingDoc) {
          const existingShares = parseFloat(existingDoc.data()?.shares) || 0;
  
          // Check if there are enough shares to subtract
          if (existingShares >= parseFloat(shares)) {
            const newShares = existingShares - parseFloat(shares);
  
            // Update the shares for the existing stock
            await existingDoc.ref.update({ shares: newShares });
            console.log('Shares subtracted from existing stock successfully!');
          } else {
            console.log('Not enough shares to subtract.');
            // Handle the case where there are not enough shares to subtract (e.g., show an error message)
          }
        } else {
          console.log('Existing document is undefined.');
          // Handle the case where the existing document is undefined (e.g., show an error message)
        }
      }
    } catch (error) {
      console.error('Error subtracting stock:', error);
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
      // Pass state-setting functions to sellStock
      sellStock(ticker, shares);
      // Reset the form submission flag
      setFormSubmitted(false);
    }
  }, [formSubmitted, ticker, shares]);

  return (
    <main className="sellstocks_container">
      <form className="sellstocks_buttons_container" onSubmit={handleSubmit}>
        <input
          className="sellstocks_search_bar"
          value={ticker}
          type="text"
          id="ticker"
          onChange={handleChange}
          placeholder="Enter Ticker Symbol"
        />

        <input
          className="sellstocks_shares_bar"
          value={shares}
          type="text"
          id="shares"
          onChange={handleChange}
          placeholder="Enter # of Shares to Sell"
        />

        <br />
        <button className="sellstocks_button" type="submit">
          Sell
        </button>
      </form>
    </main>
  );
}

export default SellStocks;
