import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  login: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    gap: '10px',
  },
});

function Login() {
  return (
    <React.Fragment>
      <p>Login to access the full dashboard</p>
      <div className="App-login">
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" />
        <br />
        <button>OK</button>
      </div>
    </React.Fragment>
  );
}

export default Login;
