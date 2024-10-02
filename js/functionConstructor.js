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
// console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// console.log(poly);

/*
Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
методами:
read() запитує два значення за допомогою prompt і запам’ятовує їх у
властивостях об’єкта.
sum() повертає суму цих властивостей.
mul() повертає результат множення даних властивостей.
 */

const Calculator = function (props) {
  this.a = props.a;
  this.b = props.b;
};

Calculator.prototype.read = function () {
  this.a = Number(prompt("Enter first value"));
  this.b = Number(prompt("Enter second value"));
  return `First value - ${this.a}, Second value - ${this.b}`;
};

Calculator.prototype.sum = function () {
  return `Summa - ${this.a + this.b}`;
};

Calculator.prototype.mul = function () {
  return `Multiply - ${this.a * this.b}`;
};

const calc = new Calculator({});

// console.log(calc.read());
// console.log(calc);
// console.log(calc.sum());
// console.log(calc.mul());

// alert(calc.sum());
// alert(calc.mul());
