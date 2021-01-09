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
    <div className="text-gray-100 text-center">
      <h1 className="text-2xl">Highest Score: {' ' + props.snake.bestScore}</h1>
      <h2 className="text-lg">Score: {' ' + snakeSize}</h2>   
    </div>
  )
}

export default Stats;