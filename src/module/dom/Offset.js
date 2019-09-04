/* eslint-disable max-len */
/**
 * 返回节点在当前屏幕的位置
 * @param {Object} node dom节点
 */
function offset(node) {
  if (!node) return;
  // getBoundingClientRect.top 距离浏览器顶部高度
  const docElem = document.documentElement;
  return {
    // getBoundingClientRect 元素距离页面左上角的位置
    // pageYOffset,pageXOffset 页面已滚动的像素

    top: node.getBoundingClientRect().top + (window.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
    left: node.getBoundingClientRect().left + (window.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0),
  };
  // 减去docElem.clientTop 为兼容IE
}

module.exports = offset;
