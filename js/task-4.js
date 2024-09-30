// Функція getFileName(file) приймає один параметр

// file - рядок з іменем файлу. Ім'я файлу може бути з розширенням, наприклад: styles.css, app.js або без, наприклад: styles, app.
// Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:

// Вона перевіряла наявність розширення в імені файлу (назва розширення відокремлюється від імені файла крапкою)
// Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок, що містить ім'я файлу без змін
// В іншому разі функція повертала підрядок з іменем файлу, але без розширення

function getFileName(file) {
  let findFileIdx = file.indexOf(".");

  return findFileIdx !== -1 ? file.slice(0, findFileIdx) : file.slice();
}

console.log(getFileName("styles.css")); //повертає "styles"
console.log(getFileName("app.js")); //повертає "app"
console.log(getFileName("app")); //повертає "app"
console.log(getFileName("index.js")); //повертає "index"
console.log(getFileName("index.html")); //повертає "index"
console.log(getFileName("index.css")); //повертає "index"
console.log(getFileName("index")); //повертає "index"
