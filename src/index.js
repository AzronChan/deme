import './css/common.scss';
import * as handleNum from './module/handleNum/handleNum';

const DEME = {}; // DEME变量名不可改，因为全局输出就是这个名字，在window下
const module = require.context('./', true, /^\.\/module.+\/.+\.js$/);
const moduleObj = { ...handleNum };

module.keys().forEach((key) => {
  const attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
  DEME[attr] = module(key);
});

for (const i in moduleObj) {
    DEME[i] = moduleObj[i];
}

export { DEME };


console.log(DEME.simpleAdd(0.01, 0.02));
