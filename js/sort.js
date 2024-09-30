//
//Метд sort() СТАРИЙ⛔⛔⛔
//НОВИЙ метод toSorted() прописан нижче в скрипті 👌👌👌
//

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// Change code below this line

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
//   firstBook.author.localeCompare(secondBook.author)
// );

// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));
// const sortedByAscendingRating = [...books].sort((a, b) => {
//   return a.rating - b.rating;
// });
// const sortedByDescentingRating = [...books].sort((a, b) => {
//   return b.rating - a.rating;
// });

// console.table(sortedByAuthorName);
// console.table(sortedByReversedAuthorName);
// console.table(sortedByAscendingRating);
// console.table(sortedByDescentingRating);

//Task
// Індекс маси тіла
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини.
// Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки.
// Не цілі числа можуть бути задані у вигляді 24.7 або 24, 7,
// тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після крапки;

function calcBMI(weight, height) {
  const userWeight = Number(weight.replace(",", "."));
  const userHeight = Number(height.replace(",", "."));

  return (userWeight / userHeight ** 2).toFixed(1);
}

// console.log(calcBMI("70", "1,77"));
// console.log(calcBMI("55.3", "1,5"));

// Example 2 - Найменше з чисел
// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.

function min(a, b) {
  // return Math.min(a, b);
  // return a > b ? b : a;
}

// console.log(min(4, 6));

/*
 * Задача
 *
 * Необхідно отримати масив їхніх імен, відсортованих за зростанням балів за тест.
 * */

const students = [
  { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
  { name: "Poly", score: 59, courses: ["science", "mathematics"] },
  { name: "Ajax", score: 37, courses: ["physics", "biology"] },
  { name: "Kiwi", score: 94, courses: ["literature", "science"] },
];

const nameBySort = [...students].sort((a, b) => a.score - b.score).map((student) => student.name);
// console.log(nameBySort);

/**
 * Задача
 *
 * Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.
 */

const uniquCoursesBySort = [...students]
  .flatMap((student) => student.courses)
  .filter((course, idx, arr) => arr.indexOf(course) === idx)
  .sort((a, b) => a.localeCompare(b));
// console.log(uniquCoursesBySort);

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    rating: 7.94,
  },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];

const MIN_BOOK_RATING = 8;
// Change code below this line

const names = [...books]
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .map(({ author }) => author)
  .sort((a, b) => a.localeCompare(b));

// console.log(names);

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];

/**
 *
 *Доповни функцію getNamesSortedByFriendCount(users) таким чином,
 щоб вона повертала масив імен користувачів,
 відсортований за зростанням кількості їхніх друзів (властивість friends).
 */

const getNamesSortedByFriendCount = (users) => {
  return [...users].sort((a, b) => a.friends.length - b.friends.length).map(({ name }) => name);
};
// console.table(getNamesSortedByFriendCount(users));

/**
 * Доповни функцію getSortedFriends(users) таким чином,
 * щоб вона повертала масив унікальних імен друзів (властивість friends),
 * відсортований за алфавітом.
 */
const getSortedFriends = (users) => {
  return [...users]
    .flatMap(({ friends }) => friends)
    .filter((friend, idx, arr) => arr.indexOf(friend) === idx)
    .sort((a, b) => a.localeCompare(b));
};

// console.table(getSortedFriends(users));

/*
Доповни функцію getTotalBalanceByGender(users, gender) таким чином,
 щоб вона повертала загальний баланс користувачів (властивість balance),
 стать яких (властивість gender) збігається зі значенням параметра gender.
*/

const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .reduce((acc, user) => {
      return (acc += user.balance);
    }, 0);
};

// console.table(getTotalBalanceByGender(users, "female"));
// console.table(getTotalBalanceByGender(users, "male"));

//
//
//
//
//
// ------------------------------------------------------------------
// 🎉🎉🎉🎉🎉🎉
// Метод toSorted()

// Метод toSorted() сортує елементи масиву.

// array.toSorted();

// Сортує вихідний масив
// Повертає новий масив
// За замовчуванням сортує за зростанням
//-------------------------------------------------------------------
//
//
//
//
//
//

const numbers = [3, 1, 8, 6, 9];
const numSort = numbers.toSorted();
// console.log(numSort);
// console.log(numbers);

//
//
//Сортування за кількістю друзів
/*Напиши стрілочну функцію sortByDescendingFriendCount(users) ,
 яка прийматиме один параметр users — масив об’єктів користувачів.

Функція має повертати масив усіх користувачів,
відсортованих за спаданням кількостій їх друзів (властивість friends).*/

const sortByDescendingFriendCount = (users) => {
  return users.toSorted((a, b) => b.friends.length - a.friends.length);
};
// console.log(
//   sortByDescendingFriendCount([
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"],
//       gender: "male",
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"],
//       gender: "female",
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       gender: "male",
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       gender: "female",
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       gender: "male",
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       gender: "male",
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       gender: "female",
//     },
//   ])
// );
