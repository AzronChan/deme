const UA = function () {
  const ua = window.navigator.userAgent;
  return {
    Ie: !!('ActiveXObject' in window),
    Ie6:
      !!('ActiveXObject' in window)
      && /msie 6.0/gi.test(window.navigator.appVersion),
    Ie7:
      !!('ActiveXObject' in window)
      && /msie 7.0/gi.test(window.navigator.appVersion),
    Ie8:
      !!('ActiveXObject' in window)
      && /msie 8.0/gi.test(window.navigator.appVersion),
    Ie9:
      !!('ActiveXObject' in window)
      && /msie 9.0/gi.test(window.navigator.appVersion),
    Ie10:
      !!('ActiveXObject' in window)
      && /msie 10.0/gi.test(window.navigator.appVersion),
    FF: /firefox/gi.test(ua),
    Opera: /opera/gi.test(ua),
    Chrom: /Chrom/gi.test(ua),
    Maxthon: /Maxthon/gi.test(ua),
    iPad: /iPad/gi.test(ua),
    android: /Android|Adr/gi.test(ua), // android终端
    mobile: !!ua.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
    ios: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
    weixin: /MicroMessenger/gi.test(ua), // 是否微信
    weibo: /WeiBo/gi.test(ua), // 是否微博
  };
};

module.exports = UA;
