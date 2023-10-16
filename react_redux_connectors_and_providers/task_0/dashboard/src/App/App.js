import React, { Component } from 'react';
import { connect } from 'react-redux';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';
import AppContext, { defaultUser } from './AppContext';

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
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD!' } },
      ],  
      displayDrawer: false,
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  };
  
  markNotificationAsRead(id) {
    this.setState({
      listNotifications: this.state.listNotifications.filter(notification => notification.id !== id)
    });
  }

  logOut = () => {
    this.setState({
      user: defaultUser,
    });
  };
  
  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }
  
  handleHideDrawer() {
    this.setState({ displayDrawer: false });
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
      this.logOut();
    }
  }
  
  render() {
    const { displayDrawer, user } = this.state;
    const { isLoggedIn } = this.props;
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    return (
      <AppContext.Provider value={{ user: this.state.user, logOut: this.logOut }}>
        <div className={css(styles.container)}>
          <Notifications 
            listNotifications={this.listNotifications} 
            displayDrawer={displayDrawer} 
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          />
          <div className={css(styles.app)}>
            <Header />
            <div className={css(styles.appBody)}>
              {user.isLoggedIn ? (
                <BodySectionWithMarginBottom title="Course list">
                  <CourseList listCourses={listCourses} />
                </BodySectionWithMarginBottom>
              ) : (
                <BodySectionWithMarginBottom title="Log in to continue">
                  <Login logIn={this.logIn} />
                </BodySectionWithMarginBottom>
              )}
              <BodySection title="News from the School">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae quam a dolor euismod ullamcorper. Maecenas a urna eget lorem sodales pulvinar eget vel neque. Praesent nibh est, bibendum quis orci at, semper aliquam arcu. Aliquam pellentesque convallis dolor sed rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam nec cursus risus, auctor rutrum quam. Etiam faucibus lobortis lectus vitae consequat. Cras blandit urna mi, ut rutrum magna auctor quis.</p>
              </BodySection>
            </div>
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn')
  };
};

export default connect(mapStateToProps)(App);
