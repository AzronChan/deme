/**
 * 解决浮加减
 * @param {Object} opt
 * @param {String} opt.action 操作类型
 * @param {Array} opt.num 计算的数组
 */
function handleNum(opt) {
  const action = opt.action || 'add';
    const num1 = opt.num[0];
    const num2 = opt.num[1];
    let r1;
    let r2;
    let m = 0;
  try {
    r1 = num1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = num2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2)); // 使用 Math.pow 获取倍数，10的r1、r2中取最大值次幂。
  if (action === 'add') {
    return (num1 * m + num2 * m) / m;
  }
  return (num1 * m - num2 * m) / m;
}


/**
 * 批量操作数字
 * @param {Object} opt
 * @param {String} opt.action 操作类型 ： add | reduce |
 * @param {Array} opt.num 需要操作的数组，item为num
 */
function handleNumArr(opt) {
  let total = 0;
      const action = opt.action || 'add';
      const arr = opt.num || [];
  if (arr.length < 2) {
      return 0;
  }
  arr.forEach((item) => {
      total = handleNum({
          action,
          num: [total, item],
      });
  });
  return total;
}


/**
 * 数字相加
 * @param {Number} num1
 * @param {Number} num2
 */function simpleAdd(num1, num2) {
  return handleNum({
      action: 'add',
      num: [num1, num2],
  }) || 0;
}


/**
 * 数字相减
 * @param {Number} num1
 * @param {Number} num2
 */
function simpleReduce(num1, num2) {
  return (
    handleNum({
      action: 'reduce',
      num: [num1, num2],
    }) || 0
  );
}


export {
 handleNum, handleNumArr, simpleAdd, simpleReduce,
};
