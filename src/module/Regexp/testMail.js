/**
 * 验证邮箱正确性
 * 允许前部有汉字
 * 汉字在正则表示为[\u4e00-\u9fa5]
 * @param {Object} str
 */
function testMail(str) {
  if (
    str.match(/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g)
  ) { return true; }
  return false;
}

module.exports = testMail;
