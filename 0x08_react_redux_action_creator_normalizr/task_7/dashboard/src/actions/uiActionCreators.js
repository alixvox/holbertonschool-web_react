import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

export function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password },
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}

export function useUIActions() {
  const dispatch = useDispatch();
  return {
    login: (email, password) => dispatch(login(email, password)),
    logout: () => dispatch(logout()),
    displayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
    hideNotificationDrawer: () => dispatch(hideNotificationDrawer()),
  };
}
