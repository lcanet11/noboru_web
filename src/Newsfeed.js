import React from 'react'
import './Newsfeed.css'
import LineGraph from './LineGraph'

function Newsfeed() {
  return (
    <div className="newsfeed">
        <div className="newsfeed__container">
            <div className="newsfeed__chartSection">
                <div className="newsfeed__portfolio">
                    <h1>$95,000</h1>
                    <p>+$44.23 (+.03%) Today</p>
                </div>
                <div className="newsfeed__chart">
                    <LineGraph />    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsfeed