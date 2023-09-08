import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

$(document).ready(function() {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  const button = $('<button>Click here to get started</button>');
  button.on('click', _.debounce(updateCounter, 500));
  $('body').append(button);
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');
});
