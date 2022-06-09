"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _whatwgFetch = require("whatwg-fetch");

var _Nodes = _interopRequireDefault(require("./Nodes.js"));

var $app = document.querySelector('.root');
var initialState = {
  nodes: [{
    id: 0,
    name: '김'
  }, {
    id: 1,
    name: '창'
  }, {
    id: 2,
    name: '현'
  }]
};
var nodes = new _Nodes["default"]({
  $app: $app,
  initialState: initialState
});