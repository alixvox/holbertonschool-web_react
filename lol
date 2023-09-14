alex.leeper@aleeper MINGW64 ~/holberton/holbertonschool-web_react/react_props/task_4/dashboard (main)
$ npm test

> dashboard@1.0.0 test
> jest


 RUNS  src/Notifications/NotificationItem.test.js

 RUNS  src/Notifications/NotificationItem.test.js

 RUNS  src/Notifications/NotificationItem.test.js
 PASS  src/CourseList/CourseList.test.js

 RUNS  src/Notifications/NotificationItem.test.js

 RUNS  src/Notifications/NotificationItem.test.js
 PASS  src/utils/utils.test.js

 RUNS  src/Notifications/NotificationItem.test.js
 PASS  src/Login/Login.test.js

 RUNS  src/Notifications/NotificationItem.test.js
 PASS  src/CourseList/CourseListRow.test.js

 RUNS  src/Notifications/NotificationItem.test.js
 PASS  src/Header/Header.test.js

 RUNS  src/Notifications/NotificationItem.test.js
 PASS  src/Footer/Footer.test.js

 RUNS  src/Notifications/NotificationItem.test.js
 PASS  src/Notifications/NotificationItem.test.js

 RUNS  src/Notifications/NotificationItem.test.js
 FAIL  src/Notifications/Notifications.test.js
  ● Test suite failed to run

    ReferenceError: PropTypes is not defined

      35 |
      36 | Notifications.propTypes = {
    > 37 |   displayDrawer: PropTypes.bool,
         |                  ^
      38 | };
      39 |
      40 | export default Notifications;

      at Object.PropTypes (src/Notifications/Notifications.js:37:18)
      at Object.require (src/Notifications/Notifications.test.js:3:1)

 FAIL  src/App/App.test.js
  ● Test suite failed to run

    ReferenceError: PropTypes is not defined

      35 |
      36 | Notifications.propTypes = {
    > 37 |   displayDrawer: PropTypes.bool,
         |                  ^
      38 | };
      39 |
      40 | export default Notifications;

      at Object.PropTypes (src/Notifications/Notifications.js:37:18)
      at Object.require (src/App/App.js:5:1)
      at Object.require (src/App/App.test.js:3:1)

Test Suites: 2 failed, 7 passed, 9 total
Tests:       18 passed, 18 total        
Snapshots:   0 total
Time:        3.162 s, estimated 4 s     
Ran all test suites.
(base) 

Okay, now, let's continue:
Update the UI
You can use the React extension in Chrome, to toggle the two booleans displayDrawer and isLoggedIn

Notifications:

Modify the CSS to make the UI looks like the image below when displayDrawer is true
This screenshot shows the Notifications section before the header, in the right hand of the screen, it says Your notififcations, and below that is the box for notifications. The things in the box are still aligned the way they are but the box itself is left-aligned under Your notifications.

Modify the CSS to make the UI looks like the image below when displayDrawer is false
The screenshot shows only the Your notifications, no box.

App:

Modify the CSS to make the UI looks like the image below when isLoggedIn is false
This screenshot shows the body of the page having the usual Login to access the full dashboard with the email and password labels and inputs and the OK button, as it is already.

Modify the CSS to make the UI looks like the image below when isLoggedIn is true
This screenshot shows what happens when isLoggedIn is true: Instead of the email and password label and inputs, there is a table.
Table name: Available courses
Column names: Course name, Credit
Rows:
ES6, 60
Webpack, 20
React, 40

Requirements:

You should define a default property for every prop that is not required
The console in your browser should not show any error or warning
Running the test suites, should show:
Test Suites: 5 passed, 5 total
Tests: 24 passed, 24 total

After the modifications