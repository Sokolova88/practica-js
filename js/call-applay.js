const user = {
  name: "Lova",
  age: 36,
  skills: ["html", "css", "js"],

  addSkills(newSkills) {
    this.skills.push(newSkills);
  },
};

user.addSkills("react");
// console.log(user.skills);

//створення нового об'єкту на прототипі user
const newUser = Object.create(user);
// console.log(user.isPrototypeOf(newUser));

newUser.location = "Kharkiv";
// console.log(newUser);

newUser.addSkills("node.js");
// console.log(newUser.skills);

//

function showName() {
  console.log(this.name);
}

//
const mango = {
  name: "mango",
  age: 20,
  skills: ["html", "css"],
};

user.addSkills.call(mango, "react");
// console.log(mango);

// showName.apply(mango);
// showName.call(user);

// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();

//❌❌❌
const hotel = {
  username: "Resort hotel",
  showThis: () => {
    console.log("this in showThis: ", this);
  },
};

hotel.showThis(); ///undefined
