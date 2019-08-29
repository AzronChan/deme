/*
 * @desc 数组去重
 */
function unique(arr) {
  return Array.from(new Set(arr));
}

module.exports = unique;
