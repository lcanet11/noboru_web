import React, {useState} from 'react'
import './Newsfeed.css'
import LineGraph from './LineGraph'
import Timeline from './Timeline'
import Chip from '@material-ui/core/Chip';
import { Avatar } from '@material-ui/core';
import BuyStocks from './BuyStocks';
import SellStocks from './SellStocks';
import StockTotal from './StockTotal';
import BuyingPower from './BuyingPower'

import StocksList from './StocksList';

function Newsfeed() {
  const [popularTopics, setTopics] = useState([
    "Technology", 
    "FinTok",
    "Upcoming Earnings", 
    "Crypto",
    "Cannabis", 
    "Healthcare Supplies", 
    "Index Funds",
    "Mutual Funds", 
    "China", 
    "Pharma"
  ]);



  return (
    <div className="newsfeed">
        <div className="newsfeed__container">
            <div className="newsfeed__chartSection">
                <br />
                <div className="newsfeed__portfolio">
                    {/* <StocksList /> */}
                    <StockTotal />
                    <p>+$3.24 (+.03%) Today</p>
                </div>
                <div className="newsfeed__chart">
                    <LineGraph />
                    <Timeline />
                </div>
            </div>
            <div className="newsfeed__buying__section">
                <h2>Buying Power</h2>
                <h2><BuyingPower /></h2>
            </div>
          
            <div className="newsfeed_chart">
              <BuyStocks />
            </div>
            <div className="newsfeed_chart">
              <SellStocks />
            </div>
            <div className="newsfeed__market__section">
                <div className="newsfeed__market__box">
                    <p>9:30 AM to 4:00 PM EST</p>
                    <h1>NYSE TODAY</h1>
                </div>
            </div>

            <div className="newsfeed__popularlists__section">
          <div className="newsfeed__popularlists__intro">
            <h1>Popular lists</h1>
            <p>Show More</p>
          </div>
          <div className="newsfeed_popularlists_badges">
            {popularTopics.map((topic) => (
              <Chip 
                className="topic__badge"
                variant="outlined"
                label={topic}
                avatar={<Avatar
                  src={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                />} 
              />
            ))}
          </div>
          </div>

            
        </div>
    </div>
  )
}

export default Newsfeed