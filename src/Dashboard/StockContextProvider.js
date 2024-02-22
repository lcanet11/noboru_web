import { createContext, useContext, useState } from 'react';

const StockContext = createContext();

export const useStock = () => {
    return useContext(StockContext);
}

function StockContextProvider({ children}) {

    const [stocksList, setStocksList ] = useState(null);

    // Function to update stocksList
    const updateStockList = (newStockList) => {
        console.log("Updating stocks list:", newStockList);
        setStocksList(newStockList);
    };

    console.log(setStocksList);
    console.log({children});

    return (
      <StockContext.Provider value={{stocksList, setStocksList, updateStockList}}>
            {children}
      </StockContext.Provider>
    );
  }

  export default StockContextProvider;