import React from 'react'

function CoolComponent() {
  return (
    <section>
        <h1>Hello World !</h1>
        <h2>Nous sommes le {new Date().toLocaleDateString()}.</h2>
    </section>
  );
}

export default CoolComponent;