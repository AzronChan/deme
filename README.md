# :package: deme 

由日常使用的JS方法和SCSS方法组成的**前端业务代码工具库**；

指在减少日常开发中重复的工作，减少生命的消耗；

避免在不同的项目中用相同的方法，需要复制粘贴的麻烦，构建一个工具库并且发布npm， 通过安装的方式提高效率;

## :hammer: 安装使用

1. 直接下载`dist/js/index.js`使用,暴露在window.deme;
2. 使用`npm`安装,支持umd通用模块规范；

- 浏览器
```
<script src="/dist/js/index.js"></script>
<script>
    deme.simpleAdd(0.01,0.03)
</script>
```

- node

``` javascript
npm install --save-dev deme

//完整引入
import deme from 'deme';
@import './deme.scss'

//按需引入 
import { simpleAdd } from 'deme'
simpleAdd(0.01,0.03);

//commonjs
const { simpleAdd } = require('./deme');
simpleAdd(0.01,0.03);
```

**推荐使用按需引入**

## :wrench: API

### 数组

- [数组排重](https://github.com/changeLong/deme/blob/master/src/module/array/unique.js)
- [冒泡算法](https://github.com/changeLong/deme/blob/master/src/module/array/bubbleSort.js)
- [判断是否数组](https://github.com/changeLong/deme/blob/master/src/module/array/isArray.js)

### cookie

- [cookie读写封装](https://github.com/changeLong/deme/blob/master/src/module/Cookie/Cookie.js)

### UA

- [获取系统](https://github.com/changeLong/deme/blob/master/src/module/device/getOs.js)
- [获取设备浏览器](https://github.com/changeLong/deme/blob/master/src/module/device/UA.js)

### dom操作

- [深度克隆](https://github.com/changeLong/deme/blob/master/src/module/dom/deepClone.js)
- [H5软键盘缩回、弹起回调](https://github.com/changeLong/deme/blob/master/src/module/dom/keyBoard.js)
- [返回节点在当前屏幕的位置](https://github.com/changeLong/deme/blob/master/src/module/dom/offset.js)

### Number

- [返回数字相加相减相乘](https://github.com/changeLong/deme/blob/master/src/module/handleNum/handleNum.js)

取12位精度，要再高精度得用第三方库了，如math.js等

当然高进度的运算速度肯定不如内置的，看自己舍弃了；

### Object

- [判断是否空数组](https://github.com/changeLong/deme/blob/master/src/module/object/isEmptyObject.js)
- [判断对象类型](https://github.com/changeLong/deme/blob/master/src/module/object/cheakTypeObject.js)

### 正则

- [判断是否邮件格式](https://github.com/changeLong/deme/blob/master/src/module/Regexp/testMail.js)
- [判断是否手机号码格式](https://github.com/changeLong/deme/blob/master/src/module/Regexp/testTel.js)

### url

- [url参数转对象](https://github.com/changeLong/deme/blob/master/src/module/url/getSearchData.js)

## :art: scss 

### [通用样式](https://github.com/changeLong/deme/blob/master/src/css/common.scss)

- 单行或者多行文字超出省略符
```
@include textOverflow;
```
- 快速设置字体(如果编辑器有自定义代码段落，当我没说:satisfied:)
```
@include fontSet(font-size,line-height,color,text-align);
@include fontSet(16px,32px,#000,center);
```
- 计算px对应的rem值
```
@include rem(16px)
```
- 1px边框，适配两倍屏，三倍屏
```
//scss
@include thinBorder((left,top),red,5px);
//class
.thin-border
```


## TODO

- [ ] 自动化测试
- [ ] 业务组件





