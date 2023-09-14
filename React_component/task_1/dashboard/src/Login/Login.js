import React from 'react';
import './Login.css';

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
