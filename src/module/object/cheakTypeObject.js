
/**
 * @desc 返回对象是否某个类型
 * @param {Object} obj 对象
 * @param {String} type 类型
 * @returns {Boolean}
 */
function cheakTypeObject(obj, type) {
    return Object.prototype.toString.call(obj) === `[object ${type}]`;
}

module.exports = cheakTypeObject;
