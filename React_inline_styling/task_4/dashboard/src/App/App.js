import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  appBody: {
    flex: 1,
    padding: '20px',
  },
  footer: {
    padding: '10px 20px',
    color: 'rgb(0, 0, 0)',
    textAlign: 'center',
    fontStyle: 'italic',
    borderTop: '3px solid #ce314b',
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.toggleDisplayDrawer = this.toggleDisplayDrawer.bind(this);
  }

  toggleDisplayDrawer() {
    this.setState(prevState => ({
      displayDrawer: !prevState.displayDrawer
    }));
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD!' } },
    ];

    return (
      <div className={css(styles.container)}>
        <Notifications 
        listNotifications={listNotifications} 
        displayDrawer={this.state.displayDrawer} 
        toggleDisplayDrawer={this.toggleDisplayDrawer}
        />
        <div className={css(styles.app)}>
          <Header />
          <div className={css(styles.appBody)}>
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </BodySection>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
