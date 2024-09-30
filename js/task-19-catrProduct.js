/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    const { items } = this;

    for (const item of items) {
      if (item.name === product.name) {
        console.log("Такий продукт вже є, збільшуємо кількість");
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      if (productName === items[i].name) {
        // console.log(items[i]);
        console.log("Знайшли такий продукт - видаляємо з кошика", i);

        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let totalPrice = 0;

    for (const item of items) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice;
  },
  increaseQuantity(productName) {
    const { items } = this;

    for (const item of items) {
      if (item.name === productName) {
        console.log(`Збільшуємо кількість продукта ${productName}`);
        item.quantity += 1;
        return;
      }
    }
  },
  decreaseQuantity(productName) {
    const { items } = this;

    for (const item of items) {
      if (item.name === productName && item.quantity > 1) {
        console.log(`Зменшуємо кількість продукта ${productName}`);
        item.quantity -= 1;
        return;
      }

      if (item.name === productName && item.quantity <= 1) {
        console.log(`Ви впевнені? Видаляємо цей продукт ${productName} з кошику товарів!`);
        this.remove(productName);
      }
    }
  },
};

console.log(cart.getItems());

// cart.add({ name: "🍎", price: 50 });
// cart.add({ name: "🍇", price: 60 });
// cart.add({ name: "🍋", price: 60 });
// cart.add({ name: "🍋", price: 60 });
// cart.add({ name: "🍓", price: 110 });
// cart.add({ name: "🍓", price: 110 });
// cart.add({ name: "🍓", price: 110 });

// console.table(cart.getItems());

// console.log("Total: ", cart.countTotalPrice());

// cart.remove("🍇");
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

// console.log("Total: ", cart.countTotalPrice());

// cart.increaseQuantity("🍎");
// cart.increaseQuantity("🍋");
// console.table(cart.getItems());

// cart.decreaseQuantity("🍋");
// cart.decreaseQuantity("🍋");
// cart.decreaseQuantity("🍋");

// console.table(cart.getItems());
