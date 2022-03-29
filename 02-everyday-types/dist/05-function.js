"use strict";
function greet(name) {
    console.log(`hello ${name.toUpperCase()} `);
}
greet("weize");
function getFavoreteNumber1() {
    return 26;
}
function getFavoreteNumber2() {
    return 26;
}
const names = ["小兰", "小红", "小张"];
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
names.forEach((s) => {
    console.log(s.toUpperCase());
});
