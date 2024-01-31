import React, { createContext, useState, useContext } from 'react';
//import context from react

const CategoryContext = createContext();


//export context so that the Category can be identified globally
export const useCategory = () => useContext(CategoryContext);

export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <CategoryContext.Provider value={{ selectedCategory, handleCategoryChange }}>
      {children}
    </CategoryContext.Provider>
  );
};
