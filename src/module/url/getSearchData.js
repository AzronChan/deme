/**
 * @desc 获取url seachdata
 */
function getSearchData() {
  const a = window.location.search.replace('?', '').split('&');
  const o = {};
  for (let i = 0; i < a.length; i++) {
    const k = a[i].split('=');
    o[k[0]] = k[1];
  }
  return o;
}

module.exports = getSearchData;
