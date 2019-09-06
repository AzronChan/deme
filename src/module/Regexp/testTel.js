/**
 * 验证手机号正确性
 * @param {String} str
 */
function testTel(str) {
  return (/^[1][3,4,5,7,8,9][0-9]{9}$/).test(str);
}

module.exports = testTel;
