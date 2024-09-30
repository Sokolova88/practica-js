/**
 *
 * ---------------------------------------------------------------------
 * Не змінює оригінальний масив.
Поелементо перебирає оригінальний масив.
Повертає все, що завгодно.
Робить все, що завгодно.
*----------------------------------------------------------------------
*
 */

/**
 * Напиши функцію, яка приймає будь який рядок літер,
 * а повертає об'єкт з літерами і їх кількістю в рядку, як "ключ: значення"
 * @param  string
 * @returns object with amounts letters
 */

const strSortByLetter = (string) => {
  return string.split("").reduce((acc, letter) => {
    letter in acc ? (acc[letter] += 1) : (acc[letter] = 1);

    return acc;
  }, {});
};

// console.log(strSortByLetter("adndjkhhlkkosjspskkeijfh"));
// console.log(strSortByLetter("SDOIUYRFDSCVCGhjgff"));

const logCar = (array) => {
  return array.reduce(
    (acc, item, idx) => {
      return acc + `${idx + 1} - ${item} \n`;
    },
    array.length ? `Загальна кількість авто: ${array.length} \n` : "Вибачте, авто немає 🤷‍♀️"
  );
};

// console.log(logCar(["VW", "Renoult", "Kia", "Cherry", "Subary", "Opel", "Toyota"]));
// console.log(logCar([]));

/**
 *
 */
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Linda Chapman", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran", "Linda Chapman"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39,
  },
];

/**
 * Rest all friends
 * function rests all friends into the one array
 * @param {*} users
 * @returns [allFriends]
 */

const getAllFriends = (users) => {
  return users.reduce((acc, user) => {
    // acc.push(...user.friends); мутує змінну ??? лінтер не пропустить
    // console.log(acc);
    return [...acc, ...user.friends]; //не мутує
  }, []);
};

// console.log(getAllFriends(users));

/**
 * Friend statistics
 * function rest all friends into the object and puts as {key: amount}
 * @param [] friends
 * @returns {friend: amount}
 */

const countFriends = (friends) => {
  return friends.reduce((acc, friend) => {
    // acc.hasOwnProperty(friend) ? (acc[friend] += 1) : (acc[friend] = 1); //мутує acc

    return {
      ...acc,
      [friend]: acc.hasOwnProperty(friend) ? acc[friend] + 1 : 1, // не мутує acc
    };
  }, {});
};

// console.log(countFriends(getAllFriends(users)));

/**
 * Загальний баланс



Напиши стрілочну функцію getTotalBalanceByGender(users, gender),
 яка прийматиме два параметра:

перший параметр users — масив об’єктів користувачів,
другий параметр gender — рядок, що зберігає стать.

Функція має використовувати ланцюжок виклику методів та
повертати загальний баланс користувачів (властивість balance),
стать яких (властивість gender) збігається зі значенням параметра gender.
 */

const getTotalBalanceByGender = (users, gender) => {
  return users.filter((user) => user.gender === gender).reduce((total, user) => (total += user.balance), 0);
};

const clients = [
  {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811,
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821,
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793,
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278,
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951,
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498,
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764,
  },
];

// console.log(getTotalBalanceByGender(clients, "male")); // 12053

// console.log(getTotalBalanceByGender(clients, "female")); // 8863

//
//
//
/**
 *
 *Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
 */
//
//

// function findOdd(numbers) {
//   return numbers.reduce((a, b) => a ^ b);
// }

function findOdd(numbers) {
  const objNum = numbers.reduce((acc, num) => {
    if (num in acc) {
      acc[num] += 1;
    } else {
      acc[num] = 1;
    }

    return acc;
  }, {});

  for (const num in objNum) {
    if (objNum[num] % 2 !== 0) {
      return Number(num); //конвертуєм в число і повертаєм його
    }
  }
}

// console.log(findOdd([1, 5, 5])); //1
// console.log(findOdd([3, 3, 2])); //2
// console.log(findOdd([7])); //7
// console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); //5
