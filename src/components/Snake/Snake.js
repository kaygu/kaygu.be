// Snake data is stored in objects, I use JSON.stringify to read it easily.
// This is not optimized at all but we work with small data structures here so it's ok

class Snake {
  constructor(width, heigt, sprite_size) {
    // snake
    this.tail = []; // index 0 == head; index -1 == tail;
    this.direction = [];
    this.apple = [];

    // game size & sprite size
    this.WIDTH = width;
    this.HEIGHT = heigt;
    this.SPRITE = sprite_size;

    // start game
    this.startGame();
    
  }

  startGame() {
    this.alive = true;
    this.spawnSnake();
    this.spawnApple();
  }

  spawnSnake() {
    this.tail = [[5, 4], [4, 4], [3, 4], [2, 4]];
    this.direction = [1, 0];
  }

  spawnApple() {
    // This may be bad in late game where only a few spots are available
    let apple = [Math.floor(Math.random() * this.WIDTH), Math.floor(Math.random() * this.HEIGHT)];
    if (!JSON.stringify(this.tail).includes(JSON.stringify(apple))) {
      this.apple = apple;
    } else {
      this.spawnApple()
    }
  }

  checkCollisions(x, y) {
    // check if bites himself
    // check if hits border
    if (JSON.stringify(this.tail.slice(1)).includes(JSON.stringify(this.tail[0]))) {
      this.alive = false;
    } else if (this.tail[0][0] < 0 || this.tail[0][0] >= this.WIDTH || this.tail[0][1] < 0 || this.tail[0][1] >= this.HEIGHT) {
      this.alive = false;
    }
  }

  get size() {
    return this.tail.length;
  }

  setDirection(d) {
    // check if direction is different ? 
    switch(d) {
      case 'up':
        this.direction = [0, -1];
        break;
      case 'down':
        this.direction = [0, 1];
        break;
      case 'right':
        this.direction = [1, 0];
        break;
      case 'left':
        this.direction = [-1, 0];
        break;
      default:
        return;
    }
  }

  update() {
    // add head with unshift() and remove tail with pop()
    // check if eats apple

    if (!this.alive)
      return;
    
    let x = this.tail[0][0] + this.direction[0];
    let y = this.tail[0][1] + this.direction[1];
    this.tail.unshift([x, y]);
    
    if (JSON.stringify(this.tail[0]) === JSON.stringify(this.apple)) {
      this.spawnApple();
    } else {
      this.tail.pop();
    }
    
    this.checkCollisions(x, y);
  }

  draw(ctx) {
    ctx.fillStyle = 'Red';
    ctx.fillRect(this.apple[0] * this.SPRITE, this.apple[1] * this.SPRITE, this.SPRITE, this.SPRITE);

    ctx.fillStyle = "Blue";
    for (let i = 1; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i][0] * this.SPRITE, this.tail[i][1] * this.SPRITE, this.SPRITE, this.SPRITE);
    }

    ctx.fillStyle = "Yellow";
    ctx.fillRect(this.tail[0][0] * this.SPRITE, this.tail[0][1] * this.SPRITE, this.SPRITE, this.SPRITE);
  }
}

export default Snake;