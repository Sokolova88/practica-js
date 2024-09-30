const chefName = function (name) {
  const makeDish = function (dish) {
    console.log(`Cheff ${name} cooks ${dish}`);
  };

  return makeDish;
};

const cheff1 = chefName("Lova");

// cheff1("pizza");

//
//

const cheff2 = chefName("Keit");

// cheff2("tea");

// Example 1 - Коллбек функції
// Напишіть наступні функції:

// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек.
// Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id
// та викликає коллбек передаючи йому створений об'єкт.

// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і
// логіює загальну вартість товару в консоль

const item = {
  quantity: 5,
  price: 300,
};

function createProduct(obj, callback) {
  const newObj = {
    ...obj,
    id: Date.now(),
  };
  callback(newObj);
}

function logProduct(product) {
  console.log(`Product - ${product.name}`);
}

function logTotalPrice(product) {
  console.log(`TotalPrice  ${product.quantity * product.price}`);
}

// createProduct(item, logTotalPrice);

// createProduct(
//   {
//     name: "🍎",
//     price: 30,
//     quantity: 3,
//   },
//   logProduct
// );

// createProduct(
//   {
//     name: "🍋",
//     price: 20,
//     quantity: 5,
//   },
//   logTotalPrice
// );

// Example 2 - Коллбек функції
// Додайте в об'єкт account методи withdraw(amount, onSuccess, onError)
// та deposit(amount, onSuccess, onError), де перший параметр це сума операції,
// а другий та третій - коллбеки.

// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT
// або this.balance, і onSuccess в іншому випадку.

// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT
// або менше або дорівнює нулю, і onSuccess в іншому випадку.

const TRANSACTION_LIMIT = 1000;

const account = {
  username: "Jacob",
  balance: 400,
  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT || amount > this.balance) {
      onError("Hey, it is bad 🤷‍♂️ Check your balance or limit for transaction!");
      return;
    }

    this.balance -= amount;
    onSuccess(`You are lucky! Hold your money ${amount}! You balance is ${this.balance} now.`);
  },
  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT || amount <= 0) {
      onError("Are you serious? 🤦‍♀️");
      return;
    }
    this.balance += amount;
    onSuccess(`You balance is ${this.balance}`);
  },
};

function onSuccess(msg) {
  console.log(`✔ Success! ${msg}`);
}

function onError(msg) {
  console.log(`❌ Error! ${msg}`);
}

// account.withdraw(200, onSuccess, onError);
// account.withdraw(2000, onSuccess, onError);
// account.withdraw(600, onSuccess, onError);
// account.withdraw(300, onSuccess, onError);
// account.deposit(1700, onSuccess, onError);
// account.deposit(0, onSuccess, onError);
// account.deposit(-600, onSuccess, onError);
// account.deposit(600, onSuccess, onError);

// (function (x) {
//   delete x;
//   return x;
// })(1);
