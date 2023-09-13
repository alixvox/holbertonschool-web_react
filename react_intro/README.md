In this project, I'll finally be using React in its truest form!
hi there! I am a web student practicing with React and wanting to run a project where you show me the code and how it uses all of the tools. I am now switching to my work laptop that already has npm and npx, and node.js, but I want to ensure I'm using the correct versions outlined in the Requirements. I have completed all actions up to copying everything from directory task_0 to task_1. Can you help me with the rest of the Embedding expressions, functions task?
Requirements
All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node 12.x.x and npm 6.x.x
Allowed editors: vi, vim, emacs, Visual Studio Code
All your files should end with a new line
A README.md file, at the root of the folder of the project, is mandatory
Basic application
Create a basic app named dashboard using create-react-app in your task_0 directory

You will need a favicon and the Holberton logo. Download them and add them to the src/ directory under dashboard/

Holberton Logo: a 400x400 pixel file "holberton-logo.jpg"

Favicon: a 256x256 pixel file "holberton.ico"

Remove the unused files:

service-worker
index.css
App.test.js
in task_0/dashboard/src/App.js, create a function App that returns:

a header div with a class named App-header containing the Holberton logo and a h1 with the text School dashboard
a body div with a class named App-body containing at least one paragraph with the text Login to access the full dashboard
a footer div with a class named App-footer containing at least one paragraph with the text Copyright 2020 - holberton School
Modify the App.css to make the project looks like the following screenshot:

The Holberton icon in the top left corner, followed by a left-aligned, but center-vertically "School dashboard" heading, in the header,

A thin red line separating the header from the body,

The body only contains left-aligned  "Login to access to the full dashboard"

A thin red line separates the body from the footer.

The footer includes only a center-aligned "Copyright 2020 - holberton School" text.
Requirements:

When running, there should not be any lint error in the console.

Embedding expressions, functions
mandatory
Using your code from the previous task, in task_1/dashboard/src/utils.js:

Create a function named getFullYear that will return the current year
Create a function named getFooterCopy:
It accepts one argument isIndex(boolean). When true, the function should return Holberton School. When false, the function should return Holberton School main dashboard
Modify the footer returned in task_1/dashboard/src/App.js to use these two functions
in task_1/dashboard/src/Notifications.js, create a Notifications element:

It should import React
It should export a function
The function should return a div with the class Notifications
The div should contain a paragraph with the text Here is the list of notifications
import the file Notifications.css.
in task_1/dashboard/src/Notifications.css, style the Notifications class:

Add a border and some padding around the div
Render the Notifications element:

Modify task_1/dashboard/src/index.js to render the new element (Notifications) in a div named root-notifications
Check that you can see the two elements on the browser, and using the React browser extension
Requirements:

When running, there should not be any lint error in the console
Repo:

GitHub repository: holbertonschool-web_react
Directory: react_intro
File: task_1/dashboard/src/, task_1/dashboard/src/utils.js, task_1/dashboard/src/App.js, task_1/dashboard/src/Notifications.css, task_1/dashboard/src/Notifications.js, task_1/dashboard/src/index.js

