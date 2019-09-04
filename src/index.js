import './css/common.scss';
import * as handleNum from './module/handleNum/handleNum';
import { cheakTypeObject } from './module/object/cheakTypeObject';

const Deme = {}; // Deme变量名不可改，因为全局输出就是这个名字，在window下
const module = require.context('./', true, /^\.\/module.+\/.+\.js$/);
const moduleObj = { ...handleNum, cheakTypeObject };

module.keys().forEach((key) => {
  const attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
  Deme[attr] = module(key);
});

for (const i in moduleObj) {
    Deme[i] = moduleObj[i];
}

// console.log(Deme);
export { Deme };
// console.log(Deme.simpleAdd(0.01, 0.02));
