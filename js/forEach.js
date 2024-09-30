const numbers = [5, 10, 15, 20, 25];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   // console.log(`Індекс ${i}, значення ${numbers[i]}`);
//   numbers[i] += 10;
// }

// console.log(numbers); //мутований масив

numbers.forEach((item, idx, array) => {
  console.log("item", item);
  // console.log("idx", idx);
  // console.log("array", array);
  item = array[idx] += 10;
  console.log(item);
});

console.log(numbers);
