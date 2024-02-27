import React from 'react'
import './StatsRow.css'
import StockSVG from './stock.svg'

function StatsRow(props) {

    console.log(props)
    //Current price - open price divided by open price * 100 
    const percentage = (((props.price - props.openPrice)/props.openPrice) * 100).toFixed(2);

  //   if (!props || !props.name || !props.volume || !props.price || !props.openPrice) {
  //     return null;
  // }

    // const getModal = () => {
  
    // }

  return (
    <div className="row">
        <div className="row__intro">
            <h1>{props?.name}</h1>
            <p>{props.volume && props.volume + " shares"}</p>
        </div>
      <div className="row__chart">
        <img src={StockSVG} height={16}/>
      </div>
      <div className="row__numbers">
        <p className="row__price">{props.price.toFixed(2)}</p>
        <p className="row__percentage">{percentage}%</p>
      </div>
    </div>
  )
}

export default StatsRow