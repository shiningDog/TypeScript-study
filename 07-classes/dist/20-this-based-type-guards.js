"use strict";
// 基于类型守卫的this
// class FileSystemObject {
//   isFile(): this is FileRep {
//     return this instanceof FileRep;
//   }
//   isDirectory(): this is Directory {
//     return this instanceof Directory;
//   }
//   isNetworked(): this is Networked & this {
//     return this.networked;
//   }
//   constructor(public path: string, private networked: boolean) {}
// }
// class FileRep extends FileSystemObject {
//   constructor(path: string, public content: string) {
//     super(path, false);
//   }
// }
// class Directory extends FileSystemObject {
//   children = [];
//   constructor() {
//     super("", false);
//   }
// }
// interface Networked {
//   host: string;
// }
// class NewNetworked extends FileSystemObject implements Networked {
//   host = "host";
//   constructor() {
//     super("", true);
//   }
// }
// // const fso: FileSystemObject = new FileRep("foo/bar.txt", "foo");
// // const fso: FileSystemObject = new Directory();
// const fso: FileSystemObject = new NewNetworked();
// if (fso.isFile()) {
//   console.log(fso.content);
// } else if (fso.isDirectory()) {
//   console.log(fso.children);
// } else if (fso.isNetworked()) {
//   console.log(fso.host);
// }
// class Box<T> {
//   value?: T;
//   hasValue(): this is { value: T } {
//     return this.value !== undefined;
//   }
// }
// const box = new Box();
// box.value = "hello";
// if (box.hasValue()) {
//   console.log(box.value);
// }
