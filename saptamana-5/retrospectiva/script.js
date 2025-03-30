// Exercitiul 1)
// a) Sa se creeze o variabila care contine cantitatea selectata a unui produs. Daca cantitatea este
// egala cu zero, sa se afiseze in consola "Selecteaza minim un produs". ( 18:51 )
// b) Daca cantitatea este mai mare decat zero, sa se afiseze in consola "Comanda poate fi plasata" (18:58)
// c) Sa se creeze o variabila care contine pretul per unitate de produs. Apoi, daca cantiatea de produs este
// mai mare decat zero, sa se afiseze in consola "Comanda poate fi plasata. Totalul este de X lei". (19:06)
// d) Sa se creeze o variabila care contine numele produsul. Apoi sa se actualizeze primul mesaj cu
// "Selecteaza minim o unitate din produsul Y". Apoi sa se actualizeze al doilea mesaj cu
// "Comanda poate fi plasata. Ai comandat X unitati din produsul Y, iar totalul este de Z lei" (19:17)

let productName = "Laptop";
let productQuantity = 5;
let productPricePerUnit = 100;
let productTotalPrice = productQuantity * productPricePerUnit;

// [0, infinit)
if (productQuantity === 0) {
  console.log(`Selecteaza minim o unitate din produsul ${productName}`);
} else {
  console.log(
    `Comanda poate fi plasata. Ai comandat ${productQuantity} unitati din produsul ${productName}, iar totalul este de ${productTotalPrice} lei`
  ); // back ticks
}

// --- Operatori logici ---
// Definitie: sunt folositi pentru a face operatii logice cu valori ( cel mai des vor fi valori boolene ).

// && (AND) - va returna true doar daca toti operanzii sunt true. daca un operand este false, operatorul va returna false
// il punem mereu intre conditii care sa fie indeplinite simultan
let x = -10;

// x apartine intervalului [-5, 5]?
if (x >= -5 && x <= 5) {
  console.log("x este in interval");
}

// || (OR) - va returna true daca cel putin un operand este true. va returna false daca toti operanzii sunt false
// x in afara intervalului [-5, 5]?
if (x < -5 || x > 5) {
  console.log("x nu este in inteval");
}

// Exercitiul 2
let isAdmin = true;
let hasProPlan = true;

// "access granted"
// "access denied"
// 19:54

if (isAdmin === true || hasProPlan === true) {
  console.log("access granted");
} else {
  console.log("access denied");
}

// Exercitiul 3
let isRaining = false;
let chancesToRain = 30; // 0 - 100

// "you should take an umbrella" daca deja ploua afara sau daca sansele sunt peste 60%
// "you may not need an umbrella" in caz contrar
// 20:09

if (isRaining === true || chancesToRain > 60) {
  console.log("you should take an umbrella");
} else {
  console.log("you may not need an umbrella");
}

// Exercitiul 4
// lunes, martes, miercoles, jueves, viernes, sabado, domingo
let dia = "lunes";
let hora = 20;

// "coffee shop is open" - L-V, 9-18
// "coffee shop is closed" - S-D
// 20:19

// varianta 1
if (dia !== "sabado" && dia !== "domingo" && hora >= 9 && hora <= 18) {
  console.log("coffee shop is open");
} else {
  console.log("coffee shop is closed");
}

// varianta 2
if (
  (dia === "lunes" ||
    dia === "martes" ||
    dia === "miercoles" ||
    dia === "jueves" ||
    dia === "viernes") &&
  hora >= 9 &&
  hora <= 18
) {
  console.log("coffee shop is open");
} else {
  console.log("coffee shop is closed");
}

// Exercitiul 5
let spentAmount = 240;
let isMember = false;

// "you get a free gift"
// "join the loyality program to earn a gift"
// 20:36

// varianta 1
// if (spentAmount >= 200 && isMember === true) {
//   console.log("you get a free gift");
// } else {
//   console.log("join the loyality program to earn a gift");
// }

// varianta 2
if (spentAmount < 200 && isMember === false) {
  console.log("join the loyality program to earn a gift");
} else {
  console.log("you get a gift");
}

// Exercitiul 6
let password = "aaa1";

// daca lungimea parolei este mai mica decat 8 si daca nu contine niciun numar,
// sa se afiseze in consola "The password must contain at least 8 characters and one number"

// else-ul este intotdeauna la final
// else if este intotdeauna fie la final, fie la mijloc
// [0, infinit]

if (password.length === 0) {
  console.log("This field is required");
} else if (
  password.length < 8 ||
  (password.includes("1") === false &&
    password.includes("2") === false &&
    password.includes("3") === false &&
    password.includes("4") === false)
) {
  console.log("The password must contain at least 8 characters and one number");
}

// --- Varianta extinsa
// 0
// if (password.length === 0) {
//   console.log("This field is required");
// } else if (password.length < 8) {
//   // 1-8
//   console.log("The password must contain at least 8 characters");
// } else if (password.length < 15) {
//   // 8-15
//   console.log("Confirmed password");
// } else {
//   // 15-infinit
//   console.log("test");
// }