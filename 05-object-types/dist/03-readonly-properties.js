"use strict";
function doSomething(obj) {
    console.log(obj.prop);
    // obj.prop = "hello"; //error 无法分配到 "prop" ，因为它是只读属性
}
function visitForBirthday(home) {
    console.log(home.resident.name);
    home.resident.age++;
}
let writablePerson = {
    name: "Felix",
    age: 18,
};
// ts 做到了类型属性兼容，所以Person类型的writablePerson可以赋值给 ReadonlyPerson类型
let readonlyPerson = writablePerson;
console.log(readonlyPerson.age);
writablePerson.age++;
console.log(readonlyPerson.age);
