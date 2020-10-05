let body = document.querySelector("body")


let results = document.getElementById("result")
let random = document.getElementById("time")
let winMessage = document.createTextNode("You Win!")
let lostMessage = document.createTextNode ("You Lost")
let userClick = false
let timer =  Math.ceil(Math.random() * 5)
let randomNumber = document.createTextNode(`${timer}`)
random.appendChild(randomNumber)


setTimeout(() => {
    if (userClick === true) {
    results.appendChild(winMessage)
    }
    else {
    results.appendChild(lostMessage)
    }
},timer * 1000);

body.addEventListener("click", () => {
    userClick = true
})
