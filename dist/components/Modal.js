"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _close = _interopRequireDefault(require("./assets/close.svg"));

var _modal = require("./styles/modal");

var _useKeyPress = require("./useKeyPress");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Modal = props => {
  (0, _useKeyPress.useKeyPress)('Escape', props.hideModal);
  return /*#__PURE__*/_react.default.createElement(_modal.ModalDiv, {
    style: props.styleModalBackground,
    onClick: props.hideModal,
    animation: props.animation
  }, /*#__PURE__*/_react.default.createElement(_modal.ModalContent, {
    style: props.styleModal,
    animation: props.animation
  }, /*#__PURE__*/_react.default.createElement(_modal.Content, {
    style: props.styleModalContent
  }, props.children), props.closeButton && /*#__PURE__*/_react.default.createElement(_modal.IMG, {
    src: _close.default,
    alt: "close",
    onClick: props.hideModal
  })));
};

var _default = Modal;
exports.default = _default;