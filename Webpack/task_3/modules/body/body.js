import $ from 'jquery';
import _ from 'lodash';
import './body.css';

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$(document).ready(function() {
  $('<p>').text('Dashboard data for the students').appendTo('body');
  const btn = $('<button>').text('Click here to get started').appendTo('body');
  $('<p>').attr('id', 'count').text('0 clicks on the button').appendTo('body');

  btn.click(_.debounce(updateCounter, 300));
});
