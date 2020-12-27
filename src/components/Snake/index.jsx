import React from 'react';

function Game(props) {
  const canvasRef = React.useRef(null);
  
  React.useEffect(() => {
    let previousPerf;
    const showFps = (ctx) => {
      let deltaT = (performance.now() - previousPerf) / 1000;
      previousPerf = performance.now();
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillStyle = "Black";
      ctx.font      = "normal 16pt Arial";
      ctx.fillText(Math.floor(1 / deltaT) + " fps", 10, 26);
    }

    const draw = (ctx, frameCount) => {
      ctx.canvas.width  = window.innerWidth;
      ctx.canvas.height = window.innerHeight - 4; // -4 px to remove scrollbar. Idk why :(
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      showFps(ctx);
      ctx.fillStyle = '#F25471';
      ctx.beginPath();
      ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, 200 * Math.sin(frameCount / 100)**2 + 5, 0, 2 * Math.PI);
      ctx.fill();

    }

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    //console.log(context)
    let frameCount = 0;
    let animationFrameId;
    
    //Our draw came here
    const render = () => {
      frameCount++;
      draw(context, frameCount);
      
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