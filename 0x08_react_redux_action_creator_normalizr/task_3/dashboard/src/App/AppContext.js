import React from 'react';

export const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

const logOut = () => {};

const AppContext = React.createContext({
  user: defaultUser,
  logOut,
});

export default AppContext;
