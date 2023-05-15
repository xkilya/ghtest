import React from 'react';

function Flter(props) {

  return (
    <div>
        <span>filter filter = {props.priceFilter}</span>
        <br />
        <button onClick={props.increment}>Increment</button>
        <br />
        <button onClick={props.decrement}>Decrement</button>
    </div>
  );
}

export default Flter;