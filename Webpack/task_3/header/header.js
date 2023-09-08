import $ from 'jquery';
import './header.css';

$(document).ready(function() {
  $('#logo').prependTo('body');
  $('<h1>').text('Holberton Dashboard').prependTo('body');
  console.log('Init header');
});
