import logo from './logo.svg';
import './App.css';
import Routering  from './components/HighSchool/Router.component';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    <Routering/>
    </div>
  );
}

export default App;
