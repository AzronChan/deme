function Offset(node) {
  if (!node) return;
  // getBoundingClientRect.top 距离浏览器顶部高度
  const docElem = document.documentElement;
  return {
    top:
      node.getBoundingClientRect().top
      + (window.pageYOffset || docElem.scrollTop)
      - (docElem.clientTop || 0),
    left:
      node.getBoundingClientRect().left
      + (window.pageXOffset || docElem.scrollLeft)
      - (docElem.clientLeft || 0),
  };
  // 减去docElem.clientTop 为兼容IE
}

module.exports = Offset;
