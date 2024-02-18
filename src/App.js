import logo from './logo.svg';
import './App.css';
import Header from './Dashboard/Header';
import Newsfeed from './Dashboard/Newsfeed';
import Stats from './Dashboard/Stats';
import { CategoryProvider } from './Dashboard/CategoryContext';

function App() {
  return (
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
  );
}

export default App;
