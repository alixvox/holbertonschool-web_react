import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  login: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '10px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px',
  },
  '@media (max-width: 900px)': {
    login: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
});

function Login() {
  return (
    <React.Fragment>
      <p>Login to access the full dashboard</p>
      <div className={css(styles.login)}>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" />
        </div>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" />
        </div>
        <button>OK</button>
      </div>
    </React.Fragment>
  );
}

export default Login;
