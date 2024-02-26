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
import PlayButton from '../Images/PlayButton-01.png'

function Newsfeed() {
  const [popularTopics, setTopics] = useState([
    "Investing Basics", 
    "Evaluating Career Breaks",
    "Term of the Day", 
    "Stock of the Week",
    "Mastering Volatility", 
    "Sustainable Investing for Women", 
    "What is an ETF?"
  ]);



  return (
    <div className="newsfeed">
        <div className="newsfeed__container">
            <div className="newsfeed__chartSection">
                <br />
                <div className="newsfeed__portfolio">
                    {/* <StocksList /> */}
                    <p>Current Balance</p>
                    <StockTotal />  
                </div>
                <div className="newsfeed__chart">
                    <LineGraph />
                    <Timeline />
                </div>
            </div>
            <div className="newsfeed__buying__section">
                <h2>Cash Balance</h2>
                <h2><BuyingPower /></h2>
            </div>
          
            <div className="newsfeed_chart">
              <BuyStocks />
            </div>
            <div className="newsfeed_chart">
              <SellStocks />
            </div>
            <div className="newsfeed__content__section">
                <div className="newsfeed__content__box">
                    <h3>Content</h3>  
                    <br />
                    <img className="content" src={PlayButton} alt="Play Button" />
                    <p className="content">Investing Basics</p>
                    <img className="content" src={PlayButton} alt="Play Button" />
                    <p className="content">Evaluating Career Breaks</p>
                    <img className="content" src={PlayButton} alt="Play Button" />
                    <p className="content">Investment Strategies for your 30s</p>
                    <img className="content" src={PlayButton} alt="Play Button" />
                    <p className="content">Mastering Volatility</p>
                    <img className="content" src={PlayButton} alt="Play Button" />
                    <p className="content">Sustainable Investing for Women</p>
                </div>
            </div>
            <div className="newsfeed__market__section">
                <div className="newsfeed__market__box">
                    <h3>Term of the Day</h3>
                    <br />
                    <p>Principal: The original amount that you paid for an investment.</p>
                </div>
            </div>
            <div className="newsfeed__market__section">
                <div className="newsfeed__market__box">
                    <h3>What is an ETF?</h3>
                    <br />
                    <p>By Alia Mohammad</p>
                </div>
            </div>

            <div className="newsfeed__popularlists__section">
          <div className="newsfeed__popularlists__intro">
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