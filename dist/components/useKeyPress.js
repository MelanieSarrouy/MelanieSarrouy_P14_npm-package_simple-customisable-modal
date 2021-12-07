"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useKeyPress = void 0;

var _react = require("react");

const useKeyPress = (key, action) => {
  (0, _react.useEffect)(() => {
    const onKeyUp = e => {
      if (e.key === key) action();
    };

    window.addEventListener('keyup', onKeyUp);
    return () => window.removeEventListener('keyup', onKeyUp);
  }, [action, key]);
};

exports.useKeyPress = useKeyPress;