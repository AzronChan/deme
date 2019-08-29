/**
 * @desc 获取URL参数
 * @return {Object}
 * @param {String}
 */
function getUrlData(s) {
  const a = s.split('?')[1].split('&');
  const o = {};
  for (let i = 0; i < a.length; i++) {
    const k = a[i].split('=');
    o[k[0]] = k[1];
  }
  return o;
}
module.exports = getUrlData;
