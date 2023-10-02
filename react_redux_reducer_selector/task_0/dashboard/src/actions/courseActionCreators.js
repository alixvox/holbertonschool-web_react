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

export function useCourseActions() {
  const dispatch = useDispatch();
  return {
    selectCourse: (index) => dispatch(selectCourse(index)),
    unSelectCourse: (index) => dispatch(unSelectCourse(index)),
  };
}
