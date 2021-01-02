// Snake data is stored in objects, I use JSON.stringify to read it easily.
// This is not optimized at all but we work with small data structures here so it's ok

class Snake {
  constructor(width, heigt, sprite_size) {
    this.tail = []; // index 0 == head; index -1 == tail;
    this.apple = [];

    this.direction = [];
    this.directionS = '';
    this.queue = [];

    this.bestScore = 0;
    


    // game size & sprite size
    this.WIDTH = width;
    this.HEIGHT = heigt;
    this.GRID_SIZE = width * heigt;
    this.SPRITE = sprite_size;
    this.OFFSET = sprite_size;

    // start game
    this.startGame();
  }

  startGame() {
    this.alive = true;
    this.gameWon = false;
    this.nbSteps = 0;
    this.spawnSnake();
    this.spawnApple();
  }

  restart() {
    if (!this.alive || this.gameWon) {
      this.startGame();
    }
  }

  spawnSnake() {
    // set snake tail
    this.tail = [[3, 0], [2, 0], [1, 0], [0, 0]];

    // set direction
    this.direction = [1, 0];
    this.directionS = 'right';
    this.queue = []; // reset direction queue
  }

  spawnApple() {
    // This may be bad in late game where only a few spots are available
    if (this.tail.length === this.GRID_SIZE) {
      return;
    }

    let apple = [Math.floor(Math.random() * this.WIDTH), Math.floor(Math.random() * this.HEIGHT)];
    if (!JSON.stringify(this.tail).includes(JSON.stringify(apple))) {
      this.apple = apple;
    } else {
      this.spawnApple()
    }
  }

  checkCollisions() {
    // check if bites himself
    // check if hits border
    if (JSON.stringify(this.tail.slice(1)).includes(JSON.stringify(this.tail[0]))) {
      this.alive = false;
    } else if (this.tail[0][0] < 0 || this.tail[0][0] >= this.WIDTH || this.tail[0][1] < 0 || this.tail[0][1] >= this.HEIGHT) {
      this.alive = false;
    }
  }

  get score() {
    return this.tail.length -4;
  }

  queueDirection(d) {
    let current_dir = this.directionS;
     
    // check if directions do not repeat
    if (this.queue.length) {
      current_dir = this.queue[this.queue.length -1];
      if (d === current_dir) {
        return;
      }
    } else if (d === this.directionS) {
      return;
    }

    // check if directions are not oposite
    if ((d === 'up' && current_dir === 'down') || (d === 'down' && current_dir === 'up') || 
      (d === 'left' && current_dir === 'right') || (d === 'right' && current_dir === 'left')) {
        return;
    }
    if (d === 'up' || d === 'down' || d === 'left' || d === 'right') {
      this.queue.push(d);
    }
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
      case 'left':
        this.direction = [-1, 0];
        break;
      case 'right':
        this.direction = [1, 0];
        break;
      default:
        return;
    }
    this.directionS = d
  }

  update() {
    // add head with unshift() and remove tail with pop()
    // check if eats apple

    if (!this.alive || this.gameWon) {
       return;
    }

    if (this.queue.length) {
      this.setDirection(this.queue.shift());
    }
    
    let x = this.tail[0][0] + this.direction[0];
    let y = this.tail[0][1] + this.direction[1];
    this.tail.unshift([x, y]);
    
    if (JSON.stringify(this.tail[0]) === JSON.stringify(this.apple)) {
      this.spawnApple();
    } else {
      this.tail.pop();
    }

    // check if perfect snake
    if (this.tail.length === this.GRID_SIZE) {
      this.gameWon = true;
    }
    this.nbSteps++;
    if (this.bestScore < this.score) {
      this.bestScore = this.score;
    }
    
    this.checkCollisions();
  }

  draw(ctx) {
    // draw BOARD
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.strokeRect(this.OFFSET, this.OFFSET, this.WIDTH * this.SPRITE, this.HEIGHT * this.SPRITE)
    
    // draw APPLE
    ctx.fillStyle = 'Red';
    ctx.fillRect(this.apple[0] * this.SPRITE + this.OFFSET, this.apple[1] * this.SPRITE + this.OFFSET, this.SPRITE, this.SPRITE);

    // draw SNAKE
    ctx.fillStyle = "Blue";
    for (let i = 1; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i][0] * this.SPRITE + this.OFFSET, this.tail[i][1] * this.SPRITE + this.OFFSET, this.SPRITE, this.SPRITE);
    }

    ctx.fillStyle = "Yellow";
    ctx.fillRect(this.tail[0][0] * this.SPRITE + this.OFFSET, this.tail[0][1] * this.SPRITE + this.OFFSET, this.SPRITE, this.SPRITE);
  }
}

export default Snake;