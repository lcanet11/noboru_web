import React, { useState, useEffect } from 'react';
import './StockTotal.css';
import { db } from './firebase';
import axios from 'axios';

const TOKEN = "cln4kl1r01qkjffmokcgcln4kl1r01qkjffmokd0";
const BASE_URL = "https://finnhub.io/api/v1/quote";

function StockTotal() {
  const collectionRef = db.collection('myStocks');
  const [totalStocks, setTotalStocks] = useState(0);

  const calculateTotalStocks = async () => {
    try {
      const stocksSnapshot = await collectionRef.get();
      let total = 0;

      for (const doc of stocksSnapshot.docs) {
        const { ticker, shares } = doc.data();
        const price = await getStocksData(ticker);
        const parsedShares = parseFloat(shares);

        // Check if parsedTicker and parsedShares are valid numbers
        if (!isNaN(parsedShares) && price !== null) {
          const stockValue = price * parsedShares;
          total += stockValue;
        }
      }

      setTotalStocks(total);
    } catch (error) {
      console.error('Error calculating total stocks:', error);
    }
  };

  const getStocksData = async (stock) => {
    try {
      const response = await axios.get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`);
      return response.data.c; 
      // 'c' represents the closing price
    } catch (error) {
      console.error("Error", error.message);
      return null;
    }
  };

  useEffect(() => {
    calculateTotalStocks();
  }, []); // Run the calculation when the component mounts

  return (
    <div>
      <h1>${totalStocks.toFixed(2)}</h1>
    </div>
  );
}

export default StockTotal;
