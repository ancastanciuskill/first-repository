// --- For Loop ---

// Fiecare for loop are 3 zone:
// 1. initializare - este executata o singura data inainte de inceperea for-ului
// 2. conditie - este executata inainte de fiecare repetitie / iteratie.
// daca conditia este adevarata atunci se va executa codul din acoladele for-ului
// daca conditia este falsa atunci se incheie executia intregului for
// 3. increment / decrement - este executata dupa fiecare repetitie / iteratie.

console.log("start...");

// Repetitia 1: i = 0 -> 0 < 4 (true) -> clg -> i++
// Repetitia 2: i = 1 -> 1 < 4 (true) -> clg -> i++
// Repetitia 3: i = 2 -> 2 < 4 (true) -> clg -> i++
// Repetitia 4: i = 3 -> 3 < 4 (true) -> clg -> i++
// Repetitia 5: i = 4 -> 4 < 4 (false)

// 0 1 2 3
// Loop 0 Loop 1 Loop 2 Loop 3
for (let i = 0; i < 4; i++) {
  console.log(`Loop ${i}`);
}

console.log("finish...");

// --- Shortcuts pentru calcule
let x = 5;
// varianta a
x = x + 1;
// varianta b
x += 1;
// varianta c
x++;

x *= 3;

// console.log(x);

// 7 : 3 = 2 rest 1
// 14 : 5 = 2 rest 4
// 10 : 5 = 2 rest 0
// 1 : 2 = 0 rest 1
// 1 : 3 = 0 rest 1

// Exercitiul 1) Sa se creeze o variabila y care contine un numar. Sa se afiseze
// in consola "y divizibil cu 2" daca y este divizbil cu 2
let y = 5;

// mod
if (y % 2 === 0) {
  console.log("y divizibil cu 2");
}

// timp 19:48
// Exercitiul 2) Folosind un for sa se afiseze in consola toate numerele de la 0 la 10.
// for (let i = 0; i < 11; i++) {
//   console.log(i);
// }

// timp 19:52
// Exercitiul 2) Folosind un for sa se afiseze in consola toate numerele multiplii de 2 de la 0 la 10
// for (let i = 0; i < 11; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// timp 19:55
// Exercitiul 3) Folosind un for sa se afiseze in consola toate numerele impare de la 0 la 10
// 7 : 2 = 3 rest 1
// 9 : 2 = 4 rest 1
// for (let i = 0; i < 11; i++) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }

// timp 19:59
// Exercitiul 4) Folosind un for sa se afiseze in consola toate numerele multiplii de 2 si de 3 de la 0 la 20
// i = 0, i < 21 (true), clg(0), i++
// i = 1, i < 21 (true), i++
// i = 2, i < 21 (true), i++
// ...
// for (let i = 0; i < 21; i++) {
//   if (i % 2 === 0 && i % 3 === 0) {
//     console.log(i);
//   }
// }

// 0 - 16
// 0 - afisam
// 1 - nu afisam
// 2 - nu afisam
// 3 - afisam
// 4 - nu afisam
// 5 - nu afisam
// 6 - afisam
// for (let i = 0; i < 16; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// --- Algoritm pentru calcularea sumei unui sir de numere
// 1 2 ... 10

// let sum = 0;

// 1 2 3 4 5 6 7 8 9 10
// for (let i = 1; i < 11; i++) {
//   sum += i; // 0 + 1 + 2 + 3 + 4 + 5 ... + 10
// }

// console.log(sum);

// Algoritm pentru calcularea produsului unui sir de numere
// 1 2 ... 10

let prod = 1;

// 1 2 3 4 5 6 7 8 9 10
for (let i = 1; i < 11; i++) {
  prod *= i; // 0 * 1 * 2 * 3 * 4 * 5 ... * 10
}

// console.log(prod);

// --- Array ---

// Exemplu:
// Q: Ce este un array?
// A: este un tip de data din javascript

// Q: Cum putem privi un array?
// A: ca pe o lista de elemente

// Q: Ce contine un array?
// A: este format din zero sau mai multe elemente, iar fiecare element reprezinta o valoare.
// la nivel de valori, un array poate contine orice tip de data ( number, string, boolean )

// Q: Cum poti accesa un element dintr-un array?
// A: pe baza index-ului
// console.log(numbers[1]);

// Q: Cum poti adauga un element intr-un array?
// A: folosind metoda push
// numbers.push(20);

// Timp 20:59
// Exercitiu: sa se creeze un array care contine o lista de cumparaturi. Fiecare lucru de cumparat o sa fie un string
// Sa se dea push la 2 elemente noi
let shoppingList = ["whiskey", "vodca", "vin", "gheata"];

// shoppingList.push()
// shoppingList.push()

// --- Algoritmi pentru Array-uri ---
let numbers = [5, 3, 32, -2, 107];
// index       0  1  2   3    4
// lungime     5

// let sum = 0;

// let i = 0 pentru ca index-ul mereu pleaca de la 0 intr-un array
// i < numbers.length pentru ca mereu ultimul index din array este mai mic cu 1 decat lungimea array-ului
// i++ pentru ca vrem sa mergem din index in index

// i = 0 -> i < 5 (true) -> sum += 5 -> i++
// i = 1 -> i < 5 (true) -> sum += 3 -> i++
// i = 2 -> i < 5 (true) -> sum += 32 -> i++
// i = 3 -> i < 5 (true) -> sum += -2 -> i++
// i = 4 -> i < 5 (true) -> sum += 107 -> i++
// i = 5 -> i < 5 (false)
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// timp 21:29
// Exercitiu: suma numerelor pare dintr-un array
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     sum += numbers[i];
//   }
// }

// timp 21:34
// Exercitiu: suma numerelor pozitive din array
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 0) {
    sum += numbers[i];
  }
}