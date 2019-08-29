import './css/common.scss';
// /**
//  * @desc webpack打包入口文件
//  */
const moduleExports = {};

const module = require.context('./', true, /^\.\/module.+\/.+\.js$/);

module.keys().forEach((key) => {
    const attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
    moduleExports[attr] = module(key);
});

console.log(moduleExports);
module.exports = moduleExports;
