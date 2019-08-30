/*
 * 是否为数组
 * 非ES6
 * ES6使用isArray()
 */
function isArray(arr) {
  return Array.isArray(arr);
  // return Object.prototype.toString.call(arr) === '[object Array]';
}

module.exports = isArray;
