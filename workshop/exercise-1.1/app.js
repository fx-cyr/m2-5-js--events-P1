// Exercise 1.1
// ------------
let body = document.querySelector("body")
let title = document.createElement("h1")
let message = document.createElement("p")
let subtitle = document.createElement("h2")


title.innerText = "Be a quicker clicker!"


body.addEventListener("click", event => {
window.clearTimeout(timeoutID)
console.log("exercise-1.1");
body.appendChild(message)
message.innerText = "You Win!";
}); 


let timeoutID
let timer = () => {
timeoutID = window.setTimeout(window.alert, 1000, 'You Lost!'); 
body.removeEventListener("click")

}

body.appendChild(title)
body.appendChild(message)
body.appendChild(subtitle)

