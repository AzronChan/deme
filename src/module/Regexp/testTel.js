/**
 * 验证手机号正确性
 * @param {String} str
 */
function testTel(str) {
  if (str.match(/^[1][3,4,5,7,8,9][0-9]{9}$/)) return true;
  return false;
}

module.exports = testTel;
