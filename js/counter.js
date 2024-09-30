const btnDecrement = document.querySelector(".js_decrement");
const btnIncrement = document.querySelector(".js_increment");
const counterValue = document.querySelector(".js_value");

// console.log(btnDecrement);
// console.log(btnIncrement);
// console.log(counterValue);

const counter = {
  value: 0,
  getDecrement() {
    console.log("This in the Decrement", this);
    this.value -= 1;
  },
  getIncrement() {
    console.log("This in the Increment", this);
    this.value += 1;
  },
};

btnDecrement.addEventListener("click", function () {
  counter.getDecrement();
  counterValue.textContent = counter.value;
});

btnIncrement.addEventListener("click", function () {
  counter.getIncrement();
  counterValue.textContent = counter.value;
});
