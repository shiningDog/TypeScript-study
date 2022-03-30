typescript study

env configuration

<ul>
  <li>vscode</li>
  <li>node</li>
  <li>typesciprt</li>
</ul>

install

```js
npm install typescript -g
```

common directive

```js
// creat tsconfig.json
tsc --init

// watch
tsc --watch

// 发出错误(编译错误时，不产生js文件)
tsc -noEmitOnError hello.ts 
or
tsc -noEmitOnError --watch
```