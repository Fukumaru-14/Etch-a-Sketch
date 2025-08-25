color = prompt('type, color')
function createBoard (size) {
    size = Number(window.prompt("How many pixels do you want your board to have?"));
    if (size > 50) {
        alert("You can use more than 100px in this canvas!")
    } else {
    let board = document.querySelector(".board")
    console.log(board)
   
    sizeBoard = size * size;
    console.log(size)
    for (let i = 0; i < sizeBoard; i++) {
        let divs = document.createElement("div");
        divs.style.backgroundColor = "#ffffffff";
        divs.style.flex = '1';
        divs.style.height = `calc(100% / ${size})`;
        divs.style.width = `calc(100% / ${size})`;
        divs.style.aspectRatio = '1 / 1'
        divs.addEventListener("mouseover", ()=> {
        divs.style.backgroundColor = color}
    );
        board.insertAdjacentElement("beforeend", divs);     
}
}
}
createBoard();
