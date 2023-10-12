import { Map, fromJS } from 'immutable';
import {
        FETCH_NOTIFICATIONS_SUCCESS,
        MARK_AS_READ,
        SET_TYPE_FILTER,
    } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';


const initialState = Map({
    filter: "DEFAULT",
    notifications: Map({}),
  });
  
function notificationReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_NOTIFICATIONS_SUCCESS:
        // Normalize and merge data
        const normalizedData = notificationsNormalizer(action.data);
        return state.mergeIn(['notifications'], fromJS(normalizedData.entities.notifications));
  
      case MARK_AS_READ:
        // Update isRead using setIn
        return state.setIn(['notifications', String(action.index), 'isRead'], true);
  
      case SET_TYPE_FILTER:
        // Update filter using set
        return state.set('filter', action.filter);
  
      default:
        return state;
    }
  }

  export default notificationReducer;
