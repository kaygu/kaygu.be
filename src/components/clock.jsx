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
    <span className={props.className}>{date.toLocaleTimeString()}</span>
  );
}
  
export default Clock;