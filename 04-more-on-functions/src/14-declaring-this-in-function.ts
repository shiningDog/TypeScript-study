// 函数重载-函数内this的声明
interface User {
  admin: boolean;
}

interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

const db: DB = {
  filterUsers: (filter: (this: User) => boolean) => {
    let user1 = {
      admin: true,
    };
    let user2 = {
      admin: false,
    };
    return [user1, user2];
  },
};

const admins = db.filterUsers(function (this) {
  return this.admin;
});
console.log("admins", admins);

// error 箭头函数不能包含 "this" 参数
// const admins = db.filterUsers((this)=> {
//   return this.admin;
// });
