// --- Button ONE ---
const buttonOne = document.querySelector(".rating-button-one");

// 1. userul face click pe button
// 2. din JS adaugam pe buton clasa selected-rating
// 3. din CSS se adauga automat pe button proprietatile clasei
// selected-rating

const handleButtonOneClick = () => {
  // 1. gaseste butonul care este acum selectat
  // 2. daca exista => scoate-i clasa selected-rating
  const currentlySelectedButton = document.querySelector(".selected-rating");
  if (currentlySelectedButton !== null) {
    currentlySelectedButton.classList.remove("selected-rating");
  }
  // 3. adauga clasa selected-rating pe button one
  buttonOne.classList.add("selected-rating");
};

buttonOne.addEventListener("click", handleButtonOneClick);

// --- Button TWO ---
const buttonTwo = document.querySelector(".rating-button-two");

const handleButtonTwoClick = () => {
  const currentlySelectedButton = document.querySelector(".selected-rating");
  if (currentlySelectedButton !== null) {
    currentlySelectedButton.classList.remove("selected-rating");
  }
  buttonTwo.classList.add("selected-rating");
};

buttonTwo.addEventListener("click", handleButtonTwoClick);

// --- Button THREE ---
const buttonThree = document.querySelector(".rating-button-three");

const handleButtonThreeClick = () => {
  const currentlySelectedButton = document.querySelector(".selected-rating");
  if (currentlySelectedButton !== null) {
    currentlySelectedButton.classList.remove("selected-rating");
  }
  buttonThree.classList.add("selected-rating");
};

buttonThree.addEventListener("click", handleButtonThreeClick);

//Button FOUR//

const handleButtonFourClick = () => {
  const currentlySelectedButton = document.querySelector(".selected-rating");
  if (currentlySelectedButton !== null) {
    currentlySelectedButton.classList.remove("selected-rating");
  }
  buttonFour.classList.add("selected-rating");
};

buttonFour.addEventListener("click", handleButtonFourClick);

//Button FIVE//

const buttonFive = document.querySelector(".rating-button-five");

const handleButtonFiveClick = () => {
  const currentlySelectedButton = document.querySelector(".selected-rating");
  if (currentlySelectedButton !== null) {
    currentlySelectedButton.classList.remove("selected-rating");
  }
  buttonFive.classList.add("selected-rating");
};

buttonFive.addEventListener("click", handleButtonFiveClick);