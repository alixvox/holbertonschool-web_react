import React from 'react';
import logo from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Holberton Logo" style={{ height: '200px' }} />
        <h1>
          School dashboard
        </h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <footer className="App-footer">
        <p>{getFooterCopy(false)}</p>
        <p>{getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
