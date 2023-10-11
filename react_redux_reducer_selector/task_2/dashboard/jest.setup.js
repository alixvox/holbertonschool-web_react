import util from 'util';

Object.defineProperty(global, 'TextEncoder', {
  value: util.TextEncoder,
});
