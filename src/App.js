import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App flex  text-left">
      <Nav />
      <header className="App-header flex-1">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
