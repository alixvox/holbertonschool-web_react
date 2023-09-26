import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { useDispatch } from 'react-redux';

export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index,
  };
}

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index,
  };
}