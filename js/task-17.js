const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line

const {
  today: {
    low: lowToday,
    high: highToday,
    icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  },
} = forecast;

// console.log(highToday);

// Change code below this line
function findMatches(arr, ...args) {
  const matches = []; // Don't change this line

  for (const arg of args) {
    // console.log(arg);
    // console.log(arr);
    if (arr.includes(arg)) {
      matches.push(arg);
    }
  }

  // Change code above this line
  return matches;
}

// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); //17.89.2
