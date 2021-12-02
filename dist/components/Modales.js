"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _close = _interopRequireDefault(require("./assets/close.svg"));

var _modale = require("./styles/modale");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Modale = props => {
  return /*#__PURE__*/_react.default.createElement(_modale.ModaleDiv, {
    style: props.styleModaleBackground
  }, /*#__PURE__*/_react.default.createElement(_modale.ModaleContent, {
    style: props.styleModale
  }, /*#__PURE__*/_react.default.createElement(_modale.Content, {
    style: props.styleModaleContent
  }, props.content), /*#__PURE__*/_react.default.createElement(_modale.IMG, {
    src: _close.default,
    alt: "close",
    onClick: props.hideModale
  })));
};

var _default = Modale;
exports.default = _default;