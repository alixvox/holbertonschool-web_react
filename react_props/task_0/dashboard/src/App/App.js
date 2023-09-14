import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="App-body">
        <Login />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
