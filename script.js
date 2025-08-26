function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}




let board = document.querySelector(".board")
function createBoard (size) {
    
    if (size > 100) {
        alert("You can't use more than 100px in this canvas!");
    }
    else {
        console.log(board)
        sizeBoard = size * size;
        console.log(size)
    for (let i = 0; i < sizeBoard; i++) {
        let divs = document.createElement("div");
        divs.style.backgroundColor = "#ffffffff";
        divs.style.flex = '1';
        divs.style.opacity = 0.1;
        divs.style.height = `calc(100% / ${size})`;
        divs.style.width = `calc(100% / ${size})`;
        divs.style.aspectRatio = '1 / 1'
        divs.addEventListener("mouseover", ()=> {
        divs.style.backgroundColor = getRandomColor()
        let current = parseFloat(divs.style.opacity);
        let newOpacity = Math.min(current + 0.1, 1);
        divs.style.opacity = newOpacity;})
        board.insertAdjacentElement("beforeend", divs);     
}
}}
createBoard(16);
let renew = document.querySelector(".renew");
renew.addEventListener("click", newBoard)
function newBoard(size) {
    size = Number(window.prompt("How many pixels do you want your board to have?"));
    document.querySelector(".board").innerHTML = "";
    createBoard(size)
}