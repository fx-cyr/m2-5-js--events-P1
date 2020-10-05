// Exercise 1.1
// ------------
let body = document.querySelector("body")

let results = document.getElementById("result")
let winMessage = document.createTextNode("You Win!")
let lostMessage = document.createTextNode ("You Lost")
let userClick = false

setTimeout(() => {
    if (userClick === true) {
    results.appendChild(winMessage)
    }
    else {
    results.appendChild(lostMessage)
    }
},1000);

body.addEventListener("click", () => {
    userClick = true
})



