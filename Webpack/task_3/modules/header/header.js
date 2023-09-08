import $ from 'jquery';
import './header.css';

$(document).ready(function() {
  $('<div id="logo"></div>').prependTo('body');
  $('<h1>').text('Holberton Dashboard').prependTo('body');
  console.log('Init header');
});
