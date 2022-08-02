typescript 学习（基础篇）

环境依赖

* vscode
* node
* typesciprt

安装

```js
npm install typescript -g
```

常用指令

```js
// 创建 tsconfig.json 配置文件
tsc --init

// 监听文件
tsc --watch

// 发出错误(编译错误时，不产生js文件)
tsc -noEmitOnError hello.ts 
or
tsc -noEmitOnError --watch
```

目录介绍
 
* typescript 介绍及入门
* 常用类型
* 类型缩小
* 函数
* 对象类型
* 类型操纵
* 类
* 模块
