const User = function ({ name = "", email = "" } = {}) {
  console.log("This in User", this);
  this.name = name;
  this.email = email;
};

User.prototype.updateEmail = function (newEmail) {
  this.email = newEmail;
};

// const myUser = new User({ name: "Lova", email: "mail@mail.com" });
// console.log(myUser);
// myUser.updateEmail("NEWmail@mail.com");
// console.log(myUser);
// const myUser2 = new User();
// console.log(myUser2);

//
//
// Напиши функцію-конструктор Account,
// яка створює об'єкт з властивостями login і email.
// В prototype функції - конструктора добав метод getInfo(),
// який виводить в консоль значення полів login і email об'єкта який його викликав.

const Account = function ({ login, email } = {}) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function () {
  console.log(` Login - ${this.login} \n Email - ${this.email}`);
};
console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com

console.log(poly);
