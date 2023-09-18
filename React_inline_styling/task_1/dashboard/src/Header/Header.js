import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '20px',
    color: 'white',
    borderBottom: '3px solid red',
  },
  h1: {
    color: 'red',
  },
  img: {
    height: '250px',
    marginRight: '20px',
  },
});

function Header() {
  return (
    <div className="App-header">
      <img src={logo} alt="Holberton Logo" style={{ height: '200px' }} />
      <h1>School dashboard</h1>
    </div>
  );
}

export default Header;
