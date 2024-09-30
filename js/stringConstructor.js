class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }

  getValue() {
    return this.value;
  }

  padEnd(str) {
    this.value += str;
  }

  padStart(str) {
    this.value = str + this.value;
  }

  padBoth(str) {
    // this.value = str + this.value + str;
    this.padStart(str);
    this.padEnd(str);
  }
}

// Change code above this line
const builder = new StringBuilder(".");

console.log(builder.getValue()); // "."

builder.padStart("^");
console.log(builder.getValue()); // "^."

builder.padEnd("^");
console.log(builder.getValue()); // "^.^"

builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

//
//
const snowman = new StringBuilder("-");

console.log(snowman.getValue()); // "-"

snowman.padStart(" * ");
console.log(snowman.getValue()); // "* -"

snowman.padEnd(" * ");
console.log(snowman.getValue()); // "* - * "

snowman.padBoth("()");
console.log(snowman.getValue()); // () * - * ()
