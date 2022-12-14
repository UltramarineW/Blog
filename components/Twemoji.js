'use strict'
exports.__esModule = true
exports.Twemoji = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var github_slugger_1 = require('github-slugger')
var kebabCase = function (str) {
  return (0, github_slugger_1.slug)(str)
}
function Twemoji(_a) {
  var emoji = _a.emoji,
    _b = _a.size,
    size = _b === void 0 ? 'twa-lg' : _b,
    className = _a.className
  var cls = 'inline-block twa '
    .concat(size, ' twa-')
    .concat(kebabCase(emoji), ' ')
    .concat(className || '')
  return (0, jsx_runtime_1.jsx)('i', { className: cls.trim() }, void 0)
}
exports.Twemoji = Twemoji
exports['default'] = Twemoji
