/* jshint node: true */
'use strict';
var fs = require('fs');
module.exports = {
  name: 'eventemitter3',
  included(app, parentAddon) {
    var target = (parentAddon || app);
    target.options = target.options || {};
    target.options.babel = target.options.babel || { includePolyfill: true };
    this._super.included.apply(this, arguments);
    target.import('node_modules/eventemitter3/index.js');
    target.import('vendor/shims/eventemitter3.js');
  }
};