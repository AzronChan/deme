
/**
 *
 * @param {Object} obj
 * @param {String} type
 */
function cheakTypeObject(obj, type) {
    return Object.prototype.toString.call(obj) === `[object ${type}]`;
}

export {
    cheakTypeObject,
};
