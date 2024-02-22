import logo from './logo.svg';
import './App.css';
import Header from './Dashboard/Header';
import Newsfeed from './Dashboard/Newsfeed';
import Stats from './Dashboard/Stats';
import { CategoryProvider } from './Dashboard/CategoryContext';
import StockContextProvider from './Dashboard/StockContextProvider'

function App() {
  return (
    <StockContextProvider>
      <CategoryProvider>
         
        <div className="App">
          <div className="app__header">
          <Header />
          </div>
        <div className="app__body">
          <div className="app__container">
          <Newsfeed />
          <Stats />
        </div>
        <div>
        </div>
      </div>
      </div>
      {/* Other components */}
      
    </CategoryProvider>
    </StockContextProvider>

  );
}

export default App;
