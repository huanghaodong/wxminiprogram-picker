function _typeof(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}
function isString(obj) { //是否字符串
  return _typeof(obj) === 'string'
}
function isPlainObject(obj) {
  return _typeof(obj) === 'object';
}
module.exports = {
  isString,
  isPlainObject
}
