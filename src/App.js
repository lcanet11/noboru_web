import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Newsfeed from './Newsfeed';
import Stats from './Stats';

function App() {
  return (
    <div className="App">

      <div className="app__header">
        <Header />
      </div>

      <div className="app__body">
        <div className="app__container">
          <Newsfeed />
          <Stats />
        </div>
      </div>




      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width={150} />
        <p>
          Noboru
        </p>
        <p>
          Trading for Women
        </p>
      </header> */}
    </div>
  );
}

export default App;
