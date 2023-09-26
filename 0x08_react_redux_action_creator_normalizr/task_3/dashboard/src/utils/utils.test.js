import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils.js', () => {
    //Test for getFullYear
    test('getFullYear returns the correct year', () => {
        expect(getFullYear()).toBe(new Date().getFullYear());
    });

    //Tests for getFooterCopy
    test('getFooterCopy returns correct string', () => {
        expect(getFooterCopy()).toBe('Holberton School');
    });

    // Test for getLatestNotification
    test('getLatestNotification returns correct string', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    });
});
