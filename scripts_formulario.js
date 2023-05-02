const firstE = document.getElementById("first_e");
const secondE = document.getElementById("second_e");
const thirdE = document.getElementById("third_e");
const FourthE = document.getElementById("forth_e");
const secondLine = document.getElementById("second_line");

const changeColor = function (element) {
  const bgColor = window.getComputedStyle(element).backgroundColor;
  secondLine.style.backgroundColor = bgColor;
};

firstE.addEventListener("mouseover", () => {
  changeColor(firstE);
});
secondE.addEventListener("mouseover", () => {
  changeColor(secondE);
});
thirdE.addEventListener("mouseover", () => {
  changeColor(thirdE);
});
FourthE.addEventListener("mouseover", () => {
  changeColor(FourthE);
});

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const register = document.querySelector(".register");
const pending = document.querySelector(".pending");
const registerForm = document.querySelector(".cancellation_form");
const pendingForm = document.querySelector(".secondary_form");

const changeToPending = function () {
  registerForm.classList.add("hidden");
  pendingForm.classList.remove("hidden");
};

const changeToRegister = function () {
  pendingForm.classList.add("hidden");
  registerForm.classList.remove("hidden");
};

pending.addEventListener("click", changeToPending);
register.addEventListener("click", changeToRegister);
