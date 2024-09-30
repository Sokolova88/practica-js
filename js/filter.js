/**
 * Не змінює оригінальний масив.
Поелементо перебирає оригінальний масив.
Повертає новий масив.
Додає у масив, що повертається, елементи, які задовольняють умови колбек-функції.
Якщо колбек повернув true, елемент додається у масив, що повертається.
Якщо колбек повернув false, елемент не додається у масив, що повертається.
Якщо жоден елемент не задовольнив умову, повертає порожній масив.
 */

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => !!(number % 2));

// console.log(evenNumbers);
// console.log(oddNumbers);

/**
 * Фільтрація унікальних елементів
 *
 *
 *  Завдання полягає у тому, щоб створити новий масив,
 * в якому будуть тільки унікальні предмети, тобто без повторень.
 */

const students = [
  { name: "Манго", courses: ["математика", "фізика"] },
  { name: "Полі", courses: ["інформатика", "математика"] },
  { name: "Ківі", courses: ["фізика", "біологія"] },
];

const allCourses = students.flatMap((student) => student.courses);
// console.log(allCourses);

const uniqueCourses = allCourses.filter((course, index, array) => {
  return array.indexOf(course) === index;
});

// console.log(uniqueCourses);

//
//
// Task
//
/**Доповни функцію getUsersWithFriend(users, friendName) таким чином,
 * щоб вона повертала масив користувачів,
 * у яких є друг з вказаним іменем friendName.
 * Друзі кожного користувача зберігаються у властивості friends. */

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

const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"],
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"],
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"],
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"],
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"],
  },
];

/**
 * function finds users by friend's name
 * @param {*} users
 * @param {*} friendName
 * @returns user who include this friendName
 */

const getUsersWithFriend = (users, friendName) => {
  return users.filter(({ friends }) => friends.includes(friendName));
};

// console.log(getUsersWithFriend(users, "Briana Decker"));
// console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// console.log(getUsersWithFriend(allUsers, "Adrian Cross")); // []
