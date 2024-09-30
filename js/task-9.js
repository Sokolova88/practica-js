for (let num = 0; num < 2; num++) {
  for (let sixe = 0; sixe < 3; sixe++) {
    if (sixe === 1) {
      break;
    }
    // console.log(sixe);
  }
}

function getLastElementMeta(array) {
  const lastIdx = array.length - 1;
  // console.log(lastIdx);
  const lastEl = array[lastIdx];
  // console.log(lastEl);
  return [lastIdx, lastEl];
}

// console.log(getLastElementMeta(["apple", "peach", "pear"]));

function checkStorage(storage, item) {
  let msg = "Sorry! We are out of stock!";
  const itemNorm = item.toLowerCase();

  if (storage.includes(itemNorm)) {
    return (msg = `${itemNorm} is available to order!`);
  }
  return msg;
}

// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));

function getCommonElements(array1, array2) {
  let newArr = [];

  // 1 спосіб
  for (let i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) {
      newArr.push(array1[i]);
    }
  }

  // 2 спосіб
  // array1.forEach((i) => {
  //   if (array2.includes(i)) {
  //     newArr.push(i);
  //   }
  // });

  // 3 спосіб
  // for (let i = 0; i < array1.length; i += 1) {
  //   for (let y = 0; y < array2.length; y += 1) {
  //     if (array1[i] === array2[y]) {
  //       newArr.push(array1[i]);
  //     }
  //   }
  // }
  return newArr;
}

// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //повертає `[10, 30, 40]`
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); //повертає `[]`
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //повертає `[1, 2]`
// console.log(getCommonElements([1, 2, 3], [2, 4])); //повертає [2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //повертає `[12, 27, 3]`
