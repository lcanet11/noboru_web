import React, { useState, useEffect } from 'react';
import './Stats.css';
import axios from 'axios';
import StatsRow from './StatsRow';
import { db } from './firebase';

const TOKEN="cln4kl1r01qkjffmokcgcln4kl1r01qkjffmokd0";
const BASE_URL="https://finnhub.io/api/v1/quote";

const testData = [];

function Stats() {

  const [stockData, setstockData] = useState([]); 
  const [myStocks, setMyStocks] = useState([]);

  const getMyStocks = () => {
    db
    .collection('myStocks')
    .onSnapshot(snapshot => {
        let promises = [];
        let tempData = []
        snapshot.docs.map((doc) => {
          promises.push(getStocksData(doc.data().ticker)
          .then(res => {
            tempData.push({
              id: doc.id,
              data: doc.data(),
              info: res.data,
            })
          })
        )})
        Promise.all(promises).then(()=>{
          setMyStocks(tempData);
          console.log("tempdata", tempData)
        })
    })
  }


  const getStocksData = (stock) => {
    return axios
    .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
    .catch((error)=> {
      console.error("Error", error.message);
    });
  }

  useEffect(()=>{

    let tempStocksData = []
    const stocksList = ["AAPL", "MSFT", "TSLA", "AMZN", "BABA", "UBER", "DIS", "SBUX"];

    getMyStocks();
    let promises = [];
    stocksList.map((stock) => {
      promises.push(
        getStocksData(stock)
        .then((res) => {
          console.log({res});
          tempStocksData.push({
            name: stock,
            ...res.data
          });
        })
      )
    });

    Promise.all(promises).then(()=>{
      setstockData(tempStocksData);
      console.log("tempStocksData", tempStocksData);
    })
  }, [])

  return (
    <div className="stats">
       <div className="stats__container">

          <div className="stats__header">
            <p>Stocks</p>
          </div>

          <div className="stats__content">
            <div className="stats__rows">
            {myStocks.map((stock)=> (
              <StatsRow 
                key={stock.data.ticker}
                name={stock.data.ticker}
                openPrice={stock.info.o}
                volume={stock.data.shares}
                price={stock.info.c}
            />
            ))}
          </div>
        </div>
          
          <div className="stats__header">
            <p>Lists</p>
          </div>

          <div className="stats__content">
            <div className="stats__rows">
            {stockData.map((stock)=> (
              <StatsRow 
                key={stock.name}
                name={stock.name}
                openPrice={stock.o}
                shares={stock.shares}
                price={stock.c}
            />
            ))}

            </div>
          </div>

      
        </div>
    </div>
  )
}

export default Stats