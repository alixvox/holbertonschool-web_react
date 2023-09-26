import React, { Component } from 'react';
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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password);
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value }, this.toggleSubmit);
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value }, this.toggleSubmit);
  }

  toggleSubmit() {
    const { email, password } = this.state;
    if (email && password) {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
  }

  render() {
    const { email, password, enableSubmit } = this.state;
    return (
      <React.Fragment>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit} className={css(styles.login)}>
          <div className={css(styles.inputGroup)}>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" value={email} onChange={this.handleChangeEmail} />
          </div>
          <div className={css(styles.inputGroup)}>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" value={password} onChange={this.handleChangePassword} />
          </div>
          <input type="submit" value="OK" disabled={!enableSubmit} />
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
