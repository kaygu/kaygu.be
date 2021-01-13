import React from 'react';

function Stats(props) {
  const [steps, setSteps] = React.useState(props.snake.moves);

  React.useEffect(() => {
    let interval = setInterval(() => {
      if (steps !== props.snake.moves) {
        setSteps(props.snake.moves);
      }
    }, 1000/ (props.gameSpeed * 2));
    
    return (() => {
      clearInterval(interval);
    });
  });

  return (
    <div className="text-gray-100 text-center">
      <h1 className="text-2xl">Highest Score: {' ' + props.snake.bestScore}</h1>
      <h2 className="text-lg">Score: {' ' + props.snake.score}</h2>
      <h3>Moves: {'' + steps}</h3>
    </div>
  )
}

export default Stats;