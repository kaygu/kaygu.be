import React from 'react';

import useKeyboardEvent from '../useKeyboardEvent';
import Stats from './Stats';

// game
import Snake from './Snake';

const SIZE_X = 10;
const SIZE_Y = 10;
const SPRITE_SIZE = 40;
const GAME_SPEED = 3;

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
      useKeyboardEvent('Enter', () => {
        s.restart();
      });
  }
  HandleKeypres();

  React.useEffect(() => {     
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let previous = performance.now();
    const interval = 1000 / GAME_SPEED;

    // canvas = board size + offset
    ctx.canvas.width  = SIZE_X * SPRITE_SIZE + 2 * SPRITE_SIZE;
    ctx.canvas.height = SIZE_Y * SPRITE_SIZE + 2 * SPRITE_SIZE;

    s.draw(ctx);
    const render = () => {
      // handle refresh rate
      let now = performance.now();
      let deltaT = now - previous;
      if (deltaT > interval) {
        previous = now - (deltaT % interval);

        // game
        s.update();
        // draw
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