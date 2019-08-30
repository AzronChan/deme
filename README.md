# Deme


由日常使用的JS方法和SCSS方法组成的**前端业务代码工具库**；

指在减少日常开发中重复的工作，减少生命的消耗；

避免在不同的项目中用相同的方法，需要复制粘贴的麻烦，构建一个工具库并且发布npm， 通过安装的方式提高效率;

## 安装使用

1. 直接下载`dist/js/index.js`使用,暴露在window.Deme;
2. 使用`npm`安装,支持umd通用模块规范；

- 浏览器
```
<script src="Deme.js"></script>
<script>
    Deme.simpleAdd(0.01,0.03)
</script>
```

- node

```
npm install --save-dev Deme

//完整引入
import Deme from 'Deme';
@import './deme.scss'

//按需引入 
import { simpleAdd } from 'Deme'
```

**推荐使用按需引入**

## API







