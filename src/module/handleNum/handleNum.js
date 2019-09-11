/**
 * 把错误的数据转正
 * strip(0.09999999999999998)=0.1
 */
function strip(num, precision = 12) {
  return parseFloat(num.toPrecision(precision));
}

/**
 * 返回数字长度,支持浮点数，防止科学计数
 * @param {Number} num
 */
function digitLength(num) {
  // Get digit length of e
  const eSplit = num.toString().split(/[eE]/);
  const len = (eSplit[0].split('.')[1] || '').length - (+(eSplit[1] || 0));
  return len > 0 ? len : 0;
}
/**
 * 把小数转成整数，支持科学计数法。如果是小数则放大成整数
 * @param {*number} num 输入数
 */
function float2Fixed(num) {
  if (num.toString().indexOf('e') === -1) {
      return Number(num.toString().replace('.', ''));
  }
  const dLen = digitLength(num);
  return dLen > 0 ? strip(num * Math.pow(10, dLen)) : num;
}

/**
 * 解决乘法浮点数为题
 */
function mul(num1, num2) {
  const baseNum = digitLength(num1) + digitLength(num2); // 最大小数点长度
  const num1Change = float2Fixed(num1);// 修复科学计数和小数点
  const num2Change = float2Fixed(num2);
  return (num1Change * num2Change) / Math.pow(10, baseNum);
}


/**
 * 解决浮加减
 * @param {Object} opt
 * @param {String} opt.action 操作类型
 * @param {Array} opt.num 计算的数组
 */
function handleNum({ action = 'add', num = [] }) {
  let m = 0;
      let total = 0;
      let index = 0;
  if (num.length < 1) {
    return num[0] ? num[0] : 0;
  }
  let arr = num.map((item) => digitLength(item));// 获取全部数字的小数点长度，此处可能会有科学计数，使用digitLength方法
  m = Math.pow(10, Math.max(...arr)); // 使用 Math.pow 获取倍数
  arr = num.map((item) => mul(item, m)); // 返回所有数字的整数
  while (index < arr.length) {
    switch (action) {
      case 'add':
        total += arr[index];
        break;
      default:
        if (index === 0) {
          total = arr[0];
          index++;
        }
        total -= arr[index];
    }
    index++;
  }
  return total / m;
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
  handleNum, simpleAdd, simpleReduce, mul,
};
