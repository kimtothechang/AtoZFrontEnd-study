"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

function Nodes(_ref) {
  var _this = this;

  var $app = _ref.$app,
      initialState = _ref.initialState;
  this.state = initialState;
  this.$target = document.createElement('ul');
  this.$target.setAttribute('class', 'Nodes');
  $app.appendChild(this.$target);

  this.setState = function (nextState) {
    _this.state = nextState;

    _this.render();
  };

  this.render = function () {
    if (_this.state.nodes) {
      var _context;

      var nodesTemplate = (0, _map["default"])(_context = _this.state.nodes).call(_context, function (node) {
        var _context2;

        return (0, _concat["default"])(_context2 = "\n          <div class=\"Node\" data-node-id=\"".concat(node.id, "\">\n            <img src=\"./img/icon.jpeg\" />\n            <div>")).call(_context2, node.name, "</div>\n          </div>\n        ");
      }).join('');
      _this.$target.innerHTML = nodesTemplate;
    }
  };

  this.render();
}

var _default = Nodes;
exports["default"] = _default;