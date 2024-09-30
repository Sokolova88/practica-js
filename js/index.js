function getCount(str) {
  let string;
  let totalCount = 0;

  string = str.split("");
  console.log(string);
  for (let i = 0; i <= string.length - 1; i += 1) {
    // console.log(string[i]);

    if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
      totalCount += 1;
    }
  }
  return totalCount;
}

console.log(getCount("Sokolova is amazing"));

function makeMessage(username) {
  console.log(`Hello ${username}`);
}

makeMessage("Jacob");
