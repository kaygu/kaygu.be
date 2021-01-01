import React from 'react';

function Stats(props) {
  const [snakeSize, setSnakeSize] = React.useState(props.snake.score);

  React.useEffect(() => {
    let interval = setInterval(() => {
      if (snakeSize !== props.snake.score) {
        setSnakeSize(props.snake.score);
      }
    }, 1000/ (props.gameSpeed * 2));
    
    return (() => {
      clearInterval(interval);
    });
  });

  return (
    <div key={snakeSize}>
      Highest Score: {' ' + props.snake.bestScore}
      <br />
      Score: {' ' + snakeSize}   
    </div>
  )
}

export default Stats;