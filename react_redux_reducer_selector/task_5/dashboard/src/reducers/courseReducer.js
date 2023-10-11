import {
    FETCH_COURSE_SUCCESS,
    SELECT_COURSE,
    UNSELECT_COURSE
} from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';
import { Map, fromJS } from 'immutable';

const initialState = Map({
        courseList: Map({}),
    });

    function courseReducer(state = initialState, action) {
        switch (action.type) {
            case FETCH_COURSE_SUCCESS:
                return state.mergeIn(['courseList'], fromJS(coursesNormalizer(action.data).entities.courses));
            case SELECT_COURSE:
                return state.setIn(['courseList', action.index.toString(), 'isSelected'], true);
            case UNSELECT_COURSE:
                return state.setIn(['courseList', action.index.toString(), 'isSelected'], false);
            default:
                return state;
        }
    }

export default courseReducer;
