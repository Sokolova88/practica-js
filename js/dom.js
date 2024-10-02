{
  /* <a class="link is-active" href="">A random link</a> */
}

const link = document.querySelector(".link");
console.log(link.classList);

const hasActiveClass = link.classList.contains("is-active");
console.log(`hasActiveClass - ${hasActiveClass}`);

link.classList.add("special");
console.log(link.classList);

link.classList.remove("is-active");
console.log(link.classList);

link.classList.toggle("is-active");
console.log(link.classList);

link.classList.replace("special", "regular");
console.log(link.classList);

/**
 * Class for painting circles
 */

class Circle {
  constructor(selector) {
    this.elem = document.querySelector(selector);
  }

  show() {
    this.elem.style.display = "block";
  }

  hide() {
    this.elem.style.display = "none";
  }
}

class CircleElem extends Circle {
  constructor({ selector, size, color } = {}) {
    super(selector);
    this.elem.style.width = size + "px";
    this.elem.style.height = size + "px";
    this.elem.style.borderRadius = "50%";
    this.elem.style.background = color;
  }
}

/* <div class="colorRed"></div>; */

const circleRed = new CircleElem({
  selector: ".colorRed",
  size: 100,
  color: "red",
});

// circleRed.hide();
// circleRed.show();

/* <div class="colorOrange"></div> */

const circleOrange = new CircleElem({
  selector: ".colorOrange",
  size: 80,
  color: "orange",
});

// circleOrange.hide();
// circleOrange.show();

// <div class="colorBlue"></div>

const circleBlue = new CircleElem({
  selector: ".colorBlue",
  size: 50,
  color: "blue",
});

// circleBlue.hide();
// circleBlue.show();

// <div class="colorGreen"></div>

const circleGreen = new CircleElem({
  selector: ".colorGreen",
  size: 120,
  color: "green",
});

// circleGreen.hide();
// circleGreen.show();
