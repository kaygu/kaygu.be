import React from 'react';

function Stats(props) {
  const [snakeSize, setSnakeSize] = React.useState(props.snake.size);

  React.useEffect(() => {
    let interval = setInterval(() => {
      if (snakeSize !== props.snake.size) {
        setSnakeSize(props.snake.size);
      }
    }, 1000/ (props.gameSpeed * 2));
    
    return (() => {
      clearInterval(interval);
    });
  });

  return (
    <div key={snakeSize}>
     Score: {' ' + snakeSize}
    </div>
  )
}

export default Stats;