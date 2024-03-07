import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><code>HELLO_WORLD</code></p>
        <p><code>Success!!</code></p>

        <a
          className="App-link"
          href="https://teralco.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          by Teralco Group
        </a>
      </header>
    </div>
  );
}

export default App;
