const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 900;
canvas.height = 600;

// Variaveis Globais
const cellSize = 100;
const cellGap = 3;
const gameGrid = [];

// mouse
const mouse = {
  x: 10,
  y: 10,
  width: 0.1,
  height: 0.1,
};

let canvasPosition = canvas.getBoundingClientRect();

canvas.addEventListener("mousemove", function (e) {
  mouse.x = e.x - canvasPosition.left;
  mouse.y = e.y - canvasPosition.top;
});

canvas.addEventListener("mouseleave", function () {
  mouse.x = undefined;
  mouse.y = undefined;
});

// Gameboard
const controlsBar = {
  width: canvas.width,
  height: cellSize,
};
// Projeteis
// Torres
// Monstros
// Funções e Utilidades

function createGrid() {
  for (let y = cellSize; y < canvas.height; y += cellSize) {
    for (let x = 0; x < canvas.width; x += cellSize) {
      gameGrid.push(new Cell(x, y));
    }
  }
}
createGrid();

function handleGameGrid() {
  for (let i = 0; i < gameGrid.length; i++) {
    gameGrid[i].draw();
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, controlsBar.width, controlsBar.height);
  handleGameGrid();
  requestAnimationFrame(animate); //recursão
}
animate();

function collision(first, second) {
  if (
    !(
      first.x > second.x + second.width ||
      first.x + first.width < second.x ||
      first.y > second.y + second.height ||
      first.y + first.height < second.y
    )
  ) {
    return true;
  }
}
