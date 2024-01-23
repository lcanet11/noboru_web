import React from 'react'
import Logo from './logo.svg'
import { Link } from 'react-router-dom'
import './Header.css'
// import Portfolio from './Portfolio';
// import Fintok from './Fintok'; // Import your Fintok component
// import ETFs from './ETFs';
// import MutualFunds from './MutualFunds';
// import Account from './Account';

function Header() {
  return (
    <div className="header__wrapper">
       <div className="header__logo">
            <img src={Logo} width={50}/>    
        </div> 
        <div className="header__search">
            <div className="header__searchContainer">
                <input placeholder="Search" type="text"/>
            </div>
        </div>

        <div className="header__menuItems">
            <a href="#">Portfolio</a>
            <a href="#">Fintok</a>
            <a href="#">ETFs</a>
            <a href="#">Mutual Funds</a>
            <a href="#">Account</a>
        </div>


    </div>
  )
}

export default Header