
import React, {useState} from 'react'
import Logo from './logo.svg'
import { Link } from 'react-router-dom'
import './Header.css'
import { useCategory } from './CategoryContext';
import { useStock } from './StockContextProvider';

function Header() {
  
  const { selectedCategory, handleCategoryChange } = useCategory();
  const{ setStocksList } = useStock();

    const updateStocksList = (category) => {
    let updatedStocksList = [];
    switch (category) {
      case 'Adventurous Saver':
        updatedStocksList = ["TSLA", "AMZN", "UBER", "BOOM"];
        break;
      case 'Balanced Saver':
        updatedStocksList = ["AAPL", "MSFT", "DIS", "SBUX", "SPY", "IWM", "QQQ"];
        break;
      case 'Cautious Saver':
        updatedStocksList = ["BABA", "DIS", "SPY", "HOG"];
        break;
      case 'Fearless Saver':
        updatedStocksList = ["AAPL", "MSFT", "TSLA", "AMZN", "BABA", "UBER", "DIS", "SBUX", "SPY", "IWM", "QQQ", "HOG", "BOOM", "FUN"];
        break;
      default:
        updatedStocksList = [];
    }
    setStocksList(updatedStocksList); // Update stocksList state
    console.log("I am executing this"); 
  }

  return (
    <div className="header__wrapper">
       <div className="header__logo">
            <img src={Logo} width={50}/>    
        </div> 
        <div className="header__search">
            <div className="header__searchContainer">
                {/* <input placeholder="Search" type="text"/> */}
                {/* create dropdown with saver personalities */}
                <select
                placeholder="Select Saver Type"
                id="categoryDropdown"
                value={selectedCategory}
                onChange={(event) => {
                  handleCategoryChange(event);
                  updateStocksList(event.target.value); // Call the function to update stocksList
                }}>
                  <option value="" disabled selected>
                  Select Saver Type
                  </option>
                  <option id="categoryOption" value="Adventurous Saver">
                    Adventurous Saver
                  </option>
                  <option id="categoryOption" value="Balanced Saver">
                    Balanced Saver
                  </option>
                  <option id="categoryOption" value="Cautious Saver">
                    Cautious Saver
                  </option>
                  <option id="categoryOption" value="Fearless Saver">
                    Fearless Saver
                  </option>
                </select>
                {selectedCategory && (
                  <div>
                  <p id="categoryDescription">Your Saving Personality: {selectedCategory}</p>
                  {/* You can add further logic or components based on the selected category */}
                </div>
                )}
            </div>
        </div>
        <div className="header__menuItems">
            <a href="#">Snapshot</a>
            <a href="#">Recommended</a>
            <a href="#">Education</a>
            <a href="#">Impact</a>
        </div>
          {/* Render the Stats component and pass the stocksList as a prop
          <Stats stocksList={stocksList} /> */}
        </div>
  )
}


export default Header;
