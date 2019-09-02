
/**
 *
 * @param {Object} obj
 * @param {String} type
 */
function isTypeObject(obj, type) {
    return Object.prototype.toString.call(obj) === `[object ${type}]`;
}

export {
    isTypeObject as istypeobject,
};
