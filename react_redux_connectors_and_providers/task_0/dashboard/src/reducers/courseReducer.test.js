import { fromJS } from 'immutable';
import courseReducer from '../reducers/courseReducer';
import {
    FETCH_COURSE_SUCCESS,
    SELECT_COURSE,
    UNSELECT_COURSE,
} from '../actions/courseActionTypes';

describe('courseReducer', () => {
    it('should return the initial state', () => {
        expect(courseReducer(undefined, {})).toEqual(fromJS({
            courseList: {},
        }));
    });

    it('should handle FETCH_COURSE_SUCCESS', () => {
        const action = {
            type: FETCH_COURSE_SUCCESS,
            data: [
                { id: 1, name: "ES6", credit: 60 },
                { id: 2, name: "Webpack", credit: 20 },
                { id: 3, name: "React", credit: 40 },
            ],
        };
        const expectedState = fromJS({
            courseList: {
                1: { id: 1, name: "ES6", credit: 60 },
                2: { id: 2, name: "Webpack", credit: 20 },
                3: { id: 3, name: "React", credit: 40 },
            },
        });
        expect(courseReducer(undefined, action)).toEqual(expectedState);
    });

    it('should handle SELECT_COURSE', () => {
        const initialState = fromJS({
            courseList: {
                1: { id: 1, name: "ES6", credit: 60 },
                2: { id: 2, name: "Webpack", credit: 20 },
                3: { id: 3, name: "React", credit: 40 },
            },
        });
        const action = { type: SELECT_COURSE, index: 2 };
        const expectedState = initialState.setIn(['courseList', '2', 'isSelected'], true);
        expect(courseReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle UNSELECT_COURSE', () => {
        const initialState = fromJS({
            courseList: {
                1: { id: 1, name: "ES6", credit: 60 },
                2: { id: 2, name: "Webpack", isSelected: true, credit: 20 },
                3: { id: 3, name: "React", credit: 40 },
            },
        });
        const action = { type: UNSELECT_COURSE, index: 2 };
        const expectedState = initialState.setIn(['courseList', '2', 'isSelected'], false);
        expect(courseReducer(initialState, action)).toEqual(expectedState);
    });
});
