'use strict';

let routesToRegister = [
  require('./client-config'),
  require('./files')
];

module.exports = (app, options) => {
  routesToRegister.forEach(routeToRegister => {
    routeToRegister(app, options);
  });
};