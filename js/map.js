/**
 * Поелементо перебирає оригінальний масив.
 * Не змінює оригінальний масив.
 * Результат роботи колбек-функції записується у новий масив.
 * Повертає новий масив однакової довжини.
 * Його можна використовувати для того, щоб змінити кожен елемент масиву або змінити один єлемент.
 * Оригінальний масив використовується як еталон,
 * на основі якого можна зробити іншу колекцію.
 */

// Доповни код таким чином, щоб у змінній planetsLengths вийшов масив довжин назв планет.
//   Обов'язково використовуй метод map().

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map((planet) => planet.length);

// console.log(planetsLengths);
// console.log(planets);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];
console.table(players);

/*
 * Получаем массив имён всех игроков
 */

const namePlayers = players.map(({ name }) => name);
console.log(namePlayers);

/*
 * Увеличиваем кол-во поинтов каждого игрока на 10%
 */

const updatePlayers = players.map((player) => ({
  ...player,
  points: player.points * 1.1,
}));

// console.table(updatePlayers);

/*
 * Увеличиваем кол-во часов игрока по id
 */

const playerIdToUpdate = "player-3";

const updatePlayerById = players.map((player) => {
  return player.id === playerIdToUpdate
    ? {
        ...player,
        timePlayed: player.timePlayed + 1000,
      }
    : player;
});

// console.table(updatePlayerById);

/**
 * Напиши стрілочну функцію getUserNames(users), яка прийматиме один параметр users — масив об’єктів користувачів.
 * Функція має повертати масив імен усіх користувачів (властивість name) із масиву users.
 */

const getUserNames = (users) => {
  return users.map((user) => user.name);
};

// console.log(
//   getUserNames([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       balance: 2811,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       balance: 3821,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       balance: 3793,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       balance: 2278,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       balance: 3951,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       balance: 1498,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       balance: 2764,
//     },
//   ])
// ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
