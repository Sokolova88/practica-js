// Базові операції з масивом
// Створіть масив genres з елементами «Jazz» та «Blues».
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.

const genres = ["Jazz", "Blues"];
// genres.push("Рок-н-рол");

// console.log(genres);
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);

// console.log(genres.shift());
// console.log(genres.unshift("Country", "Reggae"));
// console.log(genres);

// АБО

// genres.splice(genres.length, 0, "Рок-н-рол");
// console.log(genres);
// console.log(genres.splice(0, 1, "Country", "Reggae"));
// console.log(genres);

// Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами,
// значення яких зберігаються у змінній values у вигляді рядка.
// Значення гарантовано розділені пробілом.

// function getArreaRectangle(values) {
//   const newValues = values.split(" ");
//   let arrea = 1;

//   for (values of newValues) {
//     arrea *= Number(values);
//   }
//   return arrea;
// }

// console.log(getArreaRectangle("2 3"));
// console.log(getArreaRectangle("5 7"));

// Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for.
// Для кожного елемента масиву виведи в консоль рядок у форматі
// номер_елемента: значення_елемента.Нумерація елементів повинна починатися з 1.

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let i = 0, n = 1; i < fruits.length; i++, n++) {
//   const element = fruits[i];
//   console.log(`${n} - ${element}`);
// }

// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
// У змінних names та phones зберігаються рядки імен та телефонних номерів,
//   розділені комами.
//   Порядковий номер імен та телефонів у рядках вказують на відповідність.
//   Кількість імен та телефонів гарантовано однакова.

// let names = "Jacob,William,Solomon,Artem";
// let phones = "89001234567,89001112233,890055566377,890055569999";

// names = names.split(",");
// phones = phones.split(",");

// for (let i = 0; i < names.length, i < phones.length; i += 1) {
//   console.log(`${names[i]} - ${phones[i]}`);
// }

// Example 5 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього.
// Результуючий рядок не повинен починатися або закінчуватися символ пробілу.
// Скрипт повинен працювати для будь - якого рядка.

// let string = "Welcome to the future";

// string = string.split(" ");
// console.log(string);
// let newString = [];
// for (let i = 1; i < string.length - 1; i++) {
//   const element = string[i];
//   newString.push(element);
// }
// console.log(newString.join(" ").trim());

// АБО

// const result = string.split(" ").slice(1, -1).join(" ");

// console.log(result);

//
// Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку
//  за першою літерою елемента.

// const langs = ["python", "cjavascript", "ac++", "dhaskel", "bphp", "eruby"];

// const newLangs = [];
// let firstLetter = langs[0][0];
// console.log(firstLetter);

// for (let i = 0; i < langs.length; i += 1) {
//   const letter = langs[i][0];
//   if (firstLetter > letter) {
//     newLangs.unshift(langs[i]);
//     firstLetter = letter;
//   } else {
//     newLangs.push(langs[i]);
//   }
// }
// console.log(newLangs);
