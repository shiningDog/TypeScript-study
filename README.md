typescript study

env configuration

* vscode
* node
* typesciprt

install

```js
npm install typescript -g
```

common directive

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