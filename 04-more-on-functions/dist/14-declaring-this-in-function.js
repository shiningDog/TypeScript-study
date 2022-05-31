"use strict";
const db = {
    filterUsers: (filter) => {
        let user1 = {
            admin: true,
        };
        let user2 = {
            admin: false,
        };
        return [user1, user2];
    },
};
const admins = db.filterUsers(function () {
    return this.admin;
});
console.log("admins", admins);
// error 箭头函数不能包含 "this" 参数
// const admins = db.filterUsers((this)=> {
//   return this.admin;
// });
