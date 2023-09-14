import React from 'react';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function App({ isLoggedIn = false }) {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
          {isLoggedIn ? <CourseList /> : <Login />}
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
