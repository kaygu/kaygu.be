import React from 'react';

import useKeyboardEvent from '../useKeyboardEvent';
import Stats from './Stats';

// game
import Snake from './Snake';
import Board from './Board';

const SIZE_X = 10;
const SIZE_Y = 10;
const SPRITE_SIZE = 50;
const GAME_SPEED = 4;

var board = new Board(SIZE_X, SIZE_Y, SPRITE_SIZE);
var s = new Snake(SIZE_X, SIZE_Y, SPRITE_SIZE);

function SnakeGame(props) {
  const canvasRef = React.useRef(null);
  
  const HandleKeypres = () => {
      useKeyboardEvent('ArrowUp', () => {
        s.queueDirection('up');
      });
      useKeyboardEvent('ArrowDown', () => {
        s.queueDirection('down');
      });
      useKeyboardEvent('ArrowRight', () => {
        s.queueDirection('right');
      });
      useKeyboardEvent('ArrowLeft', () => {
        s.queueDirection('left');
      });
  }
  HandleKeypres();

  React.useEffect(() => {     
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let previousPerf = performance.now();
    const interval = 1000 / GAME_SPEED;

    ctx.canvas.width  = SIZE_X * SPRITE_SIZE;
    ctx.canvas.height = SIZE_Y * SPRITE_SIZE;

    
    const render = () => {
      // handle refresh rate
      let now = performance.now();
      let deltaT = now - previousPerf;
      if (deltaT > interval) {
        previousPerf = now - (deltaT % interval);

        // game
        s.update();
        // setSnakeLen(s.size);
        // draw
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        board.draw(ctx);
        s.draw(ctx);
      }
      animationFrameId = window.requestAnimationFrame(render);
    }
    render()
    
    return (() => {
      window.cancelAnimationFrame(animationFrameId)
    });
  });

  return(
    <div>
      <Stats snake={s} gameSpeed={GAME_SPEED} />
      <canvas ref={canvasRef} {...props}>
       Canvas is not supported on this browser
      </canvas>
    </div>
  );
}

export default SnakeGame;