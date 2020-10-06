BOXES = 20
function turnGreen(event) {
    const buttonID = event.target.id;
    document.getElementById(buttonID).classList.add('green');
  }

// Create the grid
for (let count = 1; count <= BOXES; count++) {
    let button = document.querySelector("button")   
    let box = document.createElement("button");
    box.id = `box${count}`
    box.innerText = count
    main.appendChild(box);
    box.addEventListener("click",turnGreen)
}

