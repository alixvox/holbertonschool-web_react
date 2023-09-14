// task_5/dashboard/src/utils/utils.test.js

import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils.js', () => {
    //Test for getFullYear
    test('getFullYear returns the correct year', () => {
        expect(getFullYear()).toBe(new Date().getFullYear());
    });

    //Tests for getFooterCopy
    test('getFooterCopy with true argument returns correct string', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
    });

    test('getFooterCopy with false argument returns correct string', () => {
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });

    // Test for getLatestNotification
    test('getLatestNotification returns correct string', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    });
});
