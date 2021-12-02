"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModaleDiv = exports.ModaleContent = exports.IMG = exports.Content = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const ModaleDiv = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: auto;\n  height: auto;\n  z-index: 10;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.8);\n"])));

exports.ModaleDiv = ModaleDiv;

const ModaleContent = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: auto;\n  height: auto;\n  position: absolute;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);\n  padding: 1rem;\n  border-radius: .5rem;\n  background-color: white;\n  top: 40vh;\n"])));

exports.ModaleContent = ModaleContent;

const Content = _styledComponents.default.p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  text-align: center;\n  color: black;\n"])));

exports.Content = Content;

const IMG = _styledComponents.default.img(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: -0.8rem;\n  right: -0.8rem;\n  width: 1.6rem;\n  height: 1.6rem;\n  cursor: pointer;\n"])));

exports.IMG = IMG;