import React from 'react'
import Logo from './logo.svg'
import './Header.css'

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
            <a href="#">FinTok</a>
            <a href="#">ETFs</a>
            <a href="#">Mutual Funds</a>
            <a href="#">Account</a>
        </div>


    </div>
  )
}

export default Header