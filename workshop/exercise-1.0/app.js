// Exercise 1.0
// ------------
let body = document.querySelector("body");

body.addEventListener("click", event => {
    console.log("exercise-1.0");
  body.innerHTML = "You Win!";
  event.stopPropagation()
});


