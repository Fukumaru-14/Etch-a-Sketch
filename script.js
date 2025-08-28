function getColor() {
    colorChoose = document.getElementById("colorPicker").value;
    color = colorChoose;
    return color
}

function getOpacity() {
    opacityChoose = document.getElementById("opacityPicker").value;
    opacity = opacityChoose;
    return opacity
}

let click = false;

let board = document.querySelector(".board")
function createBoard (size) {
    
    if (size < 2 || size > 100 || size == NaN) {
        alert("You can't use more than 100px in this canvas!");
    }
    else {
        console.log(board)
        sizeBoard = size * size;
        console.log(size)
    for (let i = 0; i < sizeBoard; i++) {
        let divs = document.createElement("div");
        divs.setAttribute("id", "divs");
        divs.style.backgroundColor = "#ffffffff";
        divs.style.flex = '1';
        divs.style.opacity = 0.1;
        divs.style.height = `calc(100% / ${size})`;
        divs.style.width = `calc(100% / ${size})`;
        divs.style.aspectRatio = '1 / 1'
        board.insertAdjacentElement("beforeend", divs);     
        divs.addEventListener("mouseover", colorDiv)
    } 
} 
}
function colorDiv() {
    if (click){
        this.style.backgroundColor = getColor();
        this.style.opacity = getOpacity();}
}
createBoard(16);
let renew = document.querySelector(".renew");
renew.addEventListener("click", newBoard)
function newBoard(size) {
    size = Number(window.prompt("How many pixels do you want your board to have?"));
    document.querySelector(".board").innerHTML = "";
    createBoard(size)
}
document.querySelector('body').addEventListener('click', () => {
    click = !click;
}
);

let resetButton = document.getElementById("reset");

resetButton.addEventListener("click", reset);
function reset(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div")
    squares.forEach((div) => (div.style.backgroundColor = "white"));
}

