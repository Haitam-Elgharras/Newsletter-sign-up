const form = document.querySelector("form");
const error = document.querySelector("span.error");
const email = form.querySelector("input[type=text]");
const card = document.querySelector(".card");
const image = document.querySelector("div.img img");

//add event listener to the screen size
window.addEventListener("resize", function () {
  if (window.innerWidth < 768) {
    image.src = "assets/images/illustration-sign-up-mobile.svg";
  } else if (window.innerWidth > 768) {
    image.src = "assets/images/illustration-sign-up-desktop.svg";
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //verify the email

  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value.match(pattern)) {
    //create a thanks card
    thanksCard();
  } else {
    errorFunction();
  }
});

function errorFunction() {
  error.style.display = "inline";
  email.style.border = "1px solid hsl(4, 100%, 67%)";
  email.style.backgroundColor = "rgb(255, 98, 87,0.3)";
}

function thanksCard() {
  //I want the 2nd card
  const cards = document.querySelectorAll(".card");
  const card2 = cards[1];
  const span = card2.querySelector("span");
  span.textContent = email.value;
  span.style.fontWeight = "bold";
  //hide the first card
  card.style.display = "none";
  //show the second card
  card2.style.display = "flex";
  const button = card2.querySelector("button");
  button.addEventListener("click", () => {
    thanksCardReverse(card2);
  });
}

function thanksCardReverse(card2) {
  //hide the second card
  card2.style.display = "none";
  //show the first card
  card.style.display = "flex";
}
