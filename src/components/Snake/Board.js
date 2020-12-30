class Board {
  constructor(SIZE_X, SIZE_Y, SPRITE_SIZE) {
    this.width = SIZE_X;
    this.height = SIZE_Y;
    
    this.tileSize = SPRITE_SIZE;
  }

  draw(ctx) {
    ctx.beginPath();
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        ctx.strokeRect(i * this.tileSize, j * this.tileSize, this.tileSize, this.tileSize);
      }
    }
    ctx.closePath();
  }
}

export default Board;