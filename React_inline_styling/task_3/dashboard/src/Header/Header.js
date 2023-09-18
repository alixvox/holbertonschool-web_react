import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // This will push items to the edges
    padding: '20px',
    borderBottom: '3px solid red',
  },
  title: {
    color: 'red',
  },
  logo: {
    height: '200px',
    marginRight: '20px',
  },
});

function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={logo} alt="Holberton Logo" className={css(styles.logo)} />
      <h1 className={css(styles.title)}>School dashboard</h1>
    </div>
  );
}

export default Header;
