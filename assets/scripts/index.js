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
  x: undefined,
  y: undefined,
  width: 0.1,
};

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
  for (let yCoord = cellSize; yCoord < canvas.height; yCoord += cellSize) {
    for (let xCoord = 0; xCoord < canvas.width; xCoord += cellSize) {
      gameGrid.push(new Cell(xCoord, yCoord));
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
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, controlsBar.width, controlsBar.height);
  handleGameGrid();
  requestAnimationFrame(animate); //recursão
}
animate();
