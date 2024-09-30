class User {
  name;
  #email;

  constructor({ name, email } = {}) {
    this.name = name;
    this.#email = email;
  }

  // Публічний метод для отримання електронної пошти
  getEmail() {
    return this.#email;
  }

  // Публічний метод для зміни електронної пошти
  changeEmail(newEmail) {
    if (this.#validateEmail(newEmail)) {
      this.#email = newEmail;
    } else {
      console.log("Invalid email format");
    }
  }

  // Приватний метод для валідації електронної пошти
  #validateEmail(email) {
    return email.includes("@");
  }
}

const mango = new User({
  name: "Mango",
  email: "mango@mail.com",
});

// Спробуємо змінити електронну пошту
// mango.changeEmail("newmail.com"); // "Invalid email format"
// mango.changeEmail("new@mail.com");
// console.log(mango.getEmail()); // "new@mail.com"

// Прямий виклик приватного методу ззовні призведе до помилки
// mango.#validateEmail("test"); // Помилка

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

/**
 * Створи клас Storage, який створюватиме об'єкти для управління складом товарів.
 * Клас очікує лише один аргумент — початковий масив товарів, який записується до
 * створеного об'єкта в приватну властивість items.

Оголоси наступні методи класу:

getItems() — повертає масив поточних товарів у приватній властивості items.
addItem(newItem) — приймає новий товар newItem і додає його до масиву товарів у
приватну властивість items об'єкта.
removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove і
видаляє його з масиву товарів у приватній властивості items об'єкта.

Візьми код нижче з ініціалізацією екземпляра й викликами методів і
встав його після оголошення класу для перевірки коректності роботи.
У консоль будуть виведені результати їх роботи. Будь ласка, нічого там не змінюй.
 */

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.items = this.items.filter((item) => item !== itemToRemove);
    //2й варіант вирішення
    // console.log(this.items.indexOf(itemToRemove));
    // this.items.splice(this.items.indexOf(itemToRemove), 1);
  }
}

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.addItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//
/*Напиши клас StringBuilder, який приймає один параметр initialValue — довільний рядок,
який записується у приватну властивість value об'єкта, що створюється.

Оголоси наступні методи класу:

getValue() — повертає поточне значення приватної властивості value.
padEnd(str) — отримує параметр str (рядок) і додає його в кінець значення
приватної властивості value об'єкта, який викликає цей метод.
padStart(str) — отримує параметр str (рядок) і додає його на початок значення
приватної властивості value об'єкта, який викликає цей метод.
padBoth(str) — отримує параметр str (рядок) і додає його на початок
і в кінець значення приватної властивості value об'єкта, який викликає цей метод.
Візьми код нижче з ініціалізацією екземпляра й викликами методів
і встав його після оголошення класу для перевірки коректності роботи.
У консоль будуть виведені результати їх роботи. Будь ласка, нічого там не змінюй.
*/
class StringBuilder {
  constructor(initialValue) {
    this.initialValue = initialValue;
  }

  getValue() {
    return this.initialValue;
  }

  padEnd(str) {
    this.initialValue += str;
  }

  padStart(str) {
    this.initialValue = str + this.initialValue;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

/**
 * Клас для створення нотаток
 *
 * // Напиши клас Notes який керує колекцією нотаток у властивості items.
 * Замітка це об'єкт із властивостями text та priority.
 * Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Додай методи addNote(note), removeNote(text) та updateNote(text, newPriority).
 */

class Notes {
  static Priority = {
    LOW: "low",
    NORMAL: "Normal",
    HIGHT: "Hight",
  };

  constructor(items) {
    this.items = items;
  }

  addNote(note) {
    const findItemText = this.items.some((item) => item.text === note.text);
    // console.log(findItemText);

    if (!findItemText) {
      this.items.push(note);
      return;
    }

    return console.log(`This note ${note.text} already exist`);
  }

  removeNote(text) {
    if (this.items.length) {
      this.items = this.items.filter((item) => item.text !== text);
    }

    // 2й варіант рішення
    // const idx = this.items.findIndex((item) => item.text === text);
    // console.log(!!~idx); //idx !== -1  idx > -1
    // if (!!~idx) {
    //   this.items.splice(idx, 1);
    // }
  }

  updateNote(text, newPriority) {
    this.items = this.items.map((item) => {
      return item.text === text ? { ...item, priority: newPriority } : item;
    });

    // 2й варіант рішення
    // const idx = this.items.findIndex((item) => item.text === text);
    // console.log(!!~idx); //idx !== -1  idx > -1
    // if (!!~idx) {
    //   this.items[idx].priority = newPriority;
    // }
  }
}

// const myNote = new Notes([]);
// console.log(myNote);

// myNote.addNote({ text: "My second note", priority: Notes.Priority.HIGHT });
// // console.log(myNote);
// myNote.addNote({ text: "My second note", priority: Notes.Priority.HIGHT });
// // console.log(myNote);
// myNote.addNote({ text: "My third note", priority: Notes.Priority.LOW });
// myNote.addNote({ text: "My first note", priority: Notes.Priority.LOW });
// // console.log(myNote);
// myNote.updateNote("My first note", Notes.Priority.NORMAL);
// myNote.removeNote("My second note");
// console.log(myNote);

//
//
// Завдання 5
// Напиши клас Car із зазначеними властивостями і методами.

class Car {
  /*
   * Додай статичний метод `getSpecs(car)`,
   * який приймає об'єкт-машину як параметр і виводить
   * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
   */
  static getSpecs({ speed, price, maxSpeed, isOn, distance }) {
    console.log(
      ` MaxSpeed = ${maxSpeed},
      \n Speed = ${speed},
       \n isOn = ${isOn},
        \n Distance = ${distance},
        \n Price = ${price}`
    );
  }
  /*
   * Конструктор отримує об'єкт налаштувань.
   *
   * Додай властивості майбутнього екземпляра класу:
   *  speed - поточна швидкість, початкова 0
   *  price - ціна автомобіля
   *  maxSpeed - максимальна швидкість
   *  isOn - заведений автомобіль, значення true або false. Спочатку false
   *  distance - загальний кілометраж, спочатку 0
   */
  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 } = {}) {
    this.speed = speed;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  /*
   * Додай геттер і сеттер для властивості price,
   * який буде працювати з властивістю ціни автомобіля.
   */
  get carPrice() {
    return this.price;
  }

  set carPrice(newPrice) {
    this.price = newPrice;
  }
  /*
   * Додай код для того, щоб завести автомобіль
   * Записує у властивість isOn значення true
   */
  turnOn() {
    this.isOn = true;
  }

  /*
   * Додай код для того, щоб заглушити автомобіль
   * Записує у властивість isOn значення false,
   * і скидає поточну швидкість в 0
   */
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  /*
   * Додає до властивості speed отримане значення,
   * за умови, що результуюча швидкість
   * не більше, ніж значення властивості maxSpeed
   */
  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
    }
  }

  /*
   * Забирає від властивості speed отримане значення,
   * за умови, що результуюча швидкість не менше нуля
   */
  decelerate(value) {
    if (this.speed - value > 0) {
      this.speed -= value;
    }
  }

  /*
   * Додає в поле distance кілометраж (hours * speed),
   * але тільки в тому випадку, якщо машина заведена!
   */
  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.carPrice = 4000;
// console.log(mustang.carPrice); // 4000

//
//
//
// Самостійне опрацювання
// Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean}
// і оголошує одну властивість on - стан вкл / викл(true / false).
// За замовчуванням значення властивості on повинно бути false.

class Toggle {
  constructor({ isOpen = false } = {}) {
    this.on = isOpen;
  }
  toggle() {
    this.on = !this.on;
  }
}

// const firstToggle = new Toggle({ isOpen: true });
// console.group("firstToggle");
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd("firstToggle");

// const secondToggle = new Toggle();
// console.group("secondToggle");
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd("secondToggle");
