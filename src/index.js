import './css/common.scss';
import * as handleNum from './module/handleNum/handleNum';
import { cheakTypeObject } from './module/object/cheakTypeObject';

const moduleExports = { ...handleNum, cheakTypeObject };

const r = require.context('./', true, /^\.\/.+\/.+\.js$/);
r.keys().forEach((key) => {
    const attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
    moduleExports[attr] = r(key);
});

module.exports = moduleExports;
