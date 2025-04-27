// Exercitiul 3) sa se creeze o functie care primeste ca parametru un email.
// functia trebuie sa returneze
// 1) "This field is required" daca emailul nu a fost introdus ( email egal cu "" )
// 2) "Invalid email" daca emailul nu e valid. un mail valid:
// - are peste 6 caractere
// - contine un singur arond
// - contine un singur punct dupa arond (cristian@gmail.com)
// - nu contine caractere speciale in afara de _ sau -, adica !, #, $, %, ^, &
// - nu contine _ sau - imediat inainte sau imediat dupa @ ( exemplu email invalid: cristian_@gmail.com )
// - nu contine _ sau - inainte sau dupa .
// - @ trebuie sa fie inainte de .
// - @ trebuie sa nu se afle pe prima pozitie in string
// - . trebuie sa nu se afle pe ultima pozitie in string
// - intre @ si . trebuie sa existe cel putin un caracter
// - dupa . trebuie sa aiba minim 2 caractere
// 3) "Valid email" daca se trece de validarile de mai sus

const specialCharacters = ["!", "#", "$", "%", "^", "&", "*", "(", ")"];

// "cr(istian@gmail.com"
// email[2]
const validateEmail = (email) => {
  // emailul nu a fost introdus
  if (email.length === 0) return "This field is required";

  // are peste 6 caractere
  if (email.length < 6) return "Invalid email";

  // contine un singur arond
  let numberOfAronds = 0;

  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      numberOfAronds++;
    }
  }

  if (numberOfAronds !== 1) return "Invalid email";

  // contine un singur punct dupa arond (cristian@gmail.com)
  let numberOfDots = 0;

  for (let i = email.indexOf("@") + 1; i < email.length; i++) {
    if (email[i] === ".") {
      numberOfDots++;
    }
  }

  if (numberOfDots !== 1) return "Invalid email";

  // (un email valid) nu contine caractere speciale in afara de _ sau -
  for (let i = 0; i < email.length; i++) {
    if (specialCharacters.includes(email[i])) {
      return "Invalid email";
    }
  }

  // nu contine _ sau - imediat inainte sau imediat dupa @ ( exemplu email invalid: cristian_@gmail.com )
  const indexOfArond = email.indexOf("@"); // 9

  if (email[indexOfArond - 1] === "_" || email[indexOfArond - 1] === "-")
    return "Invalid email";

  if (email[indexOfArond + 1] === "_" || email[indexOfArond + 1] === "-")
    return "Invalid email";
};

validateEmail("cristian@gmail.com");