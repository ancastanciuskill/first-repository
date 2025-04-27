// Exercitiul 1) Sa se scrie un algoritm care afiseaza
// in consola numele celui mai scump produs.
// "The most expensive product is X"
// --- varianta Gabi ---
// let max = 0; // 109.95
// let maxTitle; // undefined

// for (let i = 0; i < products.length; i++) {
//   if (products[i].price > max) {
//     max = products[i].price;
//     maxTitle = products[i].title;
//   }
// }

// console.log(maxTitle);

// ---
let mostExpensiveProduct = products[0];

for (let i = 1; i < products.length; i++) {
  if (products[i].price > mostExpensiveProduct.price) {
    mostExpensiveProduct = products[i];
  }
}

// Timp 19:14
// "The most expensive product is A, it costs $B and it is rated to C out of 5 by D customers."

// --- varianta simpla
// object destructuring
// forma generala: let { [nume proprietate], ... } = [obiect-din-care-vrei-sa-scoti-proprietati];
let {
  title,
  price,
  rating: { rate, count },
} = mostExpensiveProduct;
// o sa se creeze 4 variabile: title, price, rate si count
// iar fiecare variabila o sa aiba ca valoare, valoarea proprietatii cu acelasi nume din obiectul mostExpensiveProduct

// console.log(
//   `The most expensive product is ${title}, it costs $${price} and it is rated to ${rate} out of 5 by ${count} customers.`
// );

// --- varianta extinsa
// console.log(
//   `The most expensive product is ${mostExpensiveProduct.title}, it costs $${mostExpensiveProduct.price} and it is rated to ${mostExpensiveProduct.rating.rate} out of 5 by ${mostExpensiveProduct.rating.count} customers.`
// );

// Tema:
// 1. De terminat "The most expensive product is A, it costs $B and it is rated to C out of 5 by D customers."

// Cand dai peste undefined:
// - atunci cand declari o variabila fara sa o initializezi => acea variabila o sa contina undefined
// - atunci cand incerci sa accesezi o proprietate care nu exista ( ex: mostExpensiveProduct.tax )

// --------------------------------------------------------------------------

// Exercitiul 2: Sa se scrie un algoritm care afiseaza
// in consola numele celui mai scump produs din categoria jewelery
// "The most expensive jewelery is X"

// algoritm:
// - initial mostExpensiveJewelery este undefined
// - primul produs din categoria jewelery va fi pus in mostExpensiveJewelery
// - cu toate produsele ulterioare din categoria jewelery, trebuie sa le comparam
// pretul cu pretul lui mostExpensiveJewelery. Daca gasim un produs din
// categoria asta care are un pret mai mare decat mostExpensiveJewelery, atunci
// acel produs va fi pus in mostExpensiveJewelery

let mostExpensiveJewelery = products[0]; // undefined

// for (let i = 0; i < products.length; i++) {
//   if (products[i].category === "jewelery") {
//     mostExpensiveJewelery = products[i];
//     break;
//   }
// }

for (let i = 0; i < products.length; i++) {
  if (
    products[i].price > mostExpensiveJewelery.price &&
    products[i].category === "jewelery"
  ) {
    mostExpensiveJewelery = products[i];
  }
}

// --------------------------------------------------------------------------

// Exercitiul 3: Sa se scrie un algoritm care afiseaza
// in consola un array cu toate produsele din categoria "jewelery".

let jeweleryProducts = [];

for (let i = 0; i < products.length; i++) {
  if (products[i].category === "jewelery") {
    jeweleryProducts.push(products[i]);
  }
}

// --------------------------------------------------------------------------

// Exercitiul 4: Sa se scrie un algoritm care afiseaza
// in consola un array cu toate produsele care au pretul sub 100.

let productsUnderOneHundred = [];

for (let i = 0; i < products.length; i++) {
  if (products[i].price < 100) {
    productsUnderOneHundred.push(products[i]);
  }
}

// --------------------------------------------------------------------------

// Exercitiul 5: Sa se scrie un algoritm care afiseaza
// in consola un array cu toate produsele din categoria jewelery
// care costa peste 200

let jeweleryProductsOverTwoHundred = [];

for (let i = 0; i < products.length; i++) {
  if (products[i].category === "jewelery" && products[i].price > 200) {
    jeweleryProductsOverTwoHundred.push(products[i]);
  }
}

// --------------------------------------------------------------------------

// Exercitiul 6: Sa se scrie un algoritm care afiseaza
// in consola un array cu toate produsele care contin in nume
// sau in descriere cuvantul "premium".

let premiumProducts = [];

for (let i = 0; i < products.length; i++) {
  if (
    products[i].title.includes("premium") === true ||
    products[i].description.includes("premium") === true
  ) {
    premiumProducts.push(products[i]);
  }
}

// --------------------------------------------------------------------------

// Exercitiul 7: Sa se scrie un algoritm care afiseaza
// in consola un array cu toate produsele care au un rate mai mare decat 4.

let productsWithRatingOverFour = [];

for (let i = 0; i < products.length; i++) {
  if (products[i].rating.rate >= 4) {
    productsWithRatingOverFour.push(products[i]);
  }
}