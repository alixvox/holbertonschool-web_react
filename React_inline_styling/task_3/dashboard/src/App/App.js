import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '18px',
  },
  footer: {
    textAlign: 'center',
    fontStyle: 'italic',
    borderTop: '3px solid #ce314b',
    position: 'absolute',
    height: '50px',
    width: '100%',
    bottom: '0px',
  },
  app: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  appBody: {
    flex: 1,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
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
      <React.Fragment>
        <Notifications listNotifications={listNotifications} />
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
              <p>Some random news content...</p>
            </BodySection>
          </div>
          <Footer />
        </div>
      </React.Fragment>
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
