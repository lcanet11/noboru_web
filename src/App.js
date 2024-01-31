import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Newsfeed from './Newsfeed';
import Stats from './Stats';
import { CategoryProvider } from './CategoryContext';

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
