import React from 'react'

function useKeyboardEvent(key, callback) {
  React.useEffect(() => {
    const handler = function(event) {
      if (event.key === key) {
        callback();
      }
    }
    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
    }
  }, [key, callback]);
}

export default useKeyboardEvent;