// const nika = {
//   brand: `subaru`,
//   model: `forester`,
//   year: `2020`,
//   color: `white`,
//   madeIn: `usa`,
//   location: `rustavi`,
// };

// for (const property in nika) {
//   console.log(`პარამეტრენი - ${property} შემადგენოლობა ${nika[property]}`);
// }

const car = [`lasha`, `lasha1`, `lasha2`, `lasha3`];

// for (i = 1; i < car.length; i++) {
//   console.log(car[i]);
// }

// let i = 0;

// while (i < car.length) {
//   console.log(car[i]);
//   i++;
// }

// for (let cars of car) {
//   console.log(cars);
// }

// for (let nnn of car) {
//   if (nnn == `lasha2`) continue ;
//   console.log(nnn);
// }

// car.forEach((name, index) => {
//   console.log(`his name is ${name}, index is ${index}`);
// });

car.forEach((cars) => console.log(`his name is ${car}`));

const user = {
  saxeli: `lasha`,
  gvari: `jojua`,
  sruliSaxeli() {
    return `${this.saxeli} ${this.gvari}`;
  },
};

console.log(user.sruliSaxeli());
