import React from 'react';

function Clock (props) {
  const [date, setDate] = React.useState(new Date());
  React.useEffect(() => {
    let timerID = setInterval(tick, 1000);
    return(() => {
      clearInterval(timerID);
    });
  });
  
  function tick() {
    setDate(new Date());
  }
  
  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
    );
  }
  
  export default Clock;