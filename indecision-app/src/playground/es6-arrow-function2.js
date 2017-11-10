const add = (a, b) => {
  return a + b;
};
console.log(add(55, 1, 5, 7));

// Normal arrow function:
// const user = {
//   name: "Miriam",
//   cities: ["Commerce City", "Chihuahua", "Denver"],
//   printPlacesLived() {
//     const cityMessages = this.cities.map(city => {
//       return this.name + " has lived in " + city;
//     });
//     return cityMessages;
//   }
// };

// Shorthand arrow function:
const user = {
  name: "Miriam",
  cities: ["Commerce City", "Chihuahua", "Denver"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " has lived in " + city);
  }
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  muliply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};
console.log(multiplier.multiply());
