import React, { useState, useEffect } from 'react';
import './BuyStocks.css';
import { db } from './firebase';
import BuyingPower from './BuyingPower'

function BuyStocks() {

  const collectionRef = db.collection('myStocks');

  const buyStock = async (ticker, shares) => {
    try {
      // Check if the stock with the given ticker already exists
      const existingStock = await collectionRef.where('ticker', '==', ticker).get();

      if (existingStock.empty) {
        // If the stock doesn't exist, add it to the 'myStocks' collection
        await collectionRef.add({ ticker, shares: parseFloat(shares) });
        console.log('Stock added successfully!');
        // Reset the input fields after adding the stock
        setTicker('');
        setShares('');
      } else {
        // If the stock exists, update the shares for that stock
        const existingDoc = existingStock.docs[0]; // Assuming there's only one matching document
        const existingShares = parseFloat(existingDoc.data().shares) || 0;
        const newShares = existingShares + parseFloat(shares);

        // Update the shares for the existing stock
        await existingDoc.ref.update({ shares: newShares });
        console.log('Shares added to existing stock successfully!');
        // Reset the input fields after updating the stock
        setTicker('');
        setShares('');
      }
    } catch (error) {
      console.error('Error adding/updating stock:', error);
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
      {/* <div><BuyingPower /></div> */}
      <br/>
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
