import React from 'react';
import useKeyboardEvent from '../useKeyboardEvent';
import Snake from './Snake';
import Board from './Board';

const SIZE_X = 20;
const SIZE_Y = 20;
const SPRITE_SIZE = 50;
const GAME_SPEED = 5;

function Game(props) {
  const canvasRef = React.useRef(null);
  var board = new Board(SIZE_X, SIZE_Y, SPRITE_SIZE);
  var s = new Snake(SIZE_X, SIZE_Y, SPRITE_SIZE);
  
  const HandleKeypres = () => {
      useKeyboardEvent('ArrowUp', () => {
        s.setDirection('up');
      });
      useKeyboardEvent('ArrowDown', () => {
        s.setDirection('down');
      });
      useKeyboardEvent('ArrowRight', () => {
        s.setDirection('right');
      });
      useKeyboardEvent('ArrowLeft', () => {
        s.setDirection('left');
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
        console.log(s.size)
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
    <canvas ref={canvasRef} {...props}>
      Canvas is not supported on this browser
    </canvas>
  );
}

export default Game;