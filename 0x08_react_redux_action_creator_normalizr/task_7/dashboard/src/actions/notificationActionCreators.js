import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

export function markAsAread(index) {
  return {
    type: MARK_AS_READ,
    index,
  };
}

export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
}

export function useNotificationActions() {
  const dispatch = useDispatch();
  return {
    markAsAread: (index) => dispatch(markAsAread(index)),
    setNotificationFilter: (filter) => dispatch(setNotificationFilter(filter)),
  };
}
