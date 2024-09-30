/**
 * Generating pyramide
 */

const count = 10;
const character = "#";
const rows = [];
let result = "";

for (let i = 0; i <= count; i += 1) {
  rows.push(character.repeat(i + 1));
  result += rows[i] + "\n";
}

console.log(result);
