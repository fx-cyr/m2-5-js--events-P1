CIRCLES = 20
function turnGreen(event) {
    const buttonID = event.target.id;
    document.getElementById(buttonID).classList.toggle('green');
  }


// Create the grid
for (let count = 1; count <= CIRCLES; count++) {
    let randomize = Math.ceil(Math.random() * 60);
    let button = document.querySelector("button")   
    let box = document.createElement("button");
    box.id = `box${count}`
    box.style.top = `${randomize}vh`
    box.style.left = `${randomize}vw`
    box.innerText = count
    main.appendChild(box);
    box.addEventListener("click",turnGreen)
}

