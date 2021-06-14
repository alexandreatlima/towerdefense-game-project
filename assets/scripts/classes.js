class Cell {
  constructor(xPosition, yPosition) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.width = cellSize;
    this.height = cellSize;
  }
  draw() {
    ctx.strokeStyle = "black";
    ctx.strokeRect(this.xPosition, this.yPosition, this.width, this.height);
  }
}
