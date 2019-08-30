import './css/common.scss';

const DEME = {}; // DEME变量名不可改，因为全局输出就是这个名字，在window下

const module = require.context('./', true, /^\.\/module.+\/.+\.js$/);

module.keys().forEach((key) => {
    const attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
    DEME[attr] = module(key);
});

export { DEME };
